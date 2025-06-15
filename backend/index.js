require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const session = require("express-session");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const User = require("./model/User");
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const { WatchlistModel } = require("./model/WatchlistModel");
const { FundsModel } = require("./model/FundsModel");


const allowedStocks = [
  "ADANIPORTS", "APOLLOHOSP", "ASIANPAINT", "AXISBANK", "BAJAJ-AUTO",
  "BAJFINANCE", "BAJAJFINSV", "BPCL", "BHARTIARTL", "BRITANNIA",
  "CIPLA", "COALINDIA", "DIVISLAB", "DRREDDY", "EICHERMOT",
  "GRASIM", "HCLTECH", "HDFCBANK", "HDFCLIFE", "HEROMOTOCO",
  "HINDALCO", "HINDUNILVR", "ICICIBANK", "ITC", "INDUSINDBK",
  "INFY", "JSWSTEEL", "KOTAKBANK", "LTIM", "LT",
  "M&M", "MARUTI", "NESTLEIND", "NTPC", "ONGC",
  "POWERGRID", "RELIANCE", "SBILIFE", "SBIN", "SUNPHARMA",
  "TATACONSUM", "TATAMOTORS", "TATASTEEL", "TCS", "TECHM",
  "TITAN", "ULTRACEMCO", "UPL", "WIPRO"
];

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

app.use(cors({
  origin: function (origin, callback) {
    console.log("Origin:", origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("❌ CORS blocked:", origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV,
      httpOnly: true,
      sameSite: 'lax'
    }
  })
);

app.use(bodyParser.json());

app.post("/users/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Incoming body:", req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });

    // Set cookie with secure options
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV, // Use secure cookies in production
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
    });

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/users/me", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error("Auth error:", err);
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: "Invalid token" });
    }
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/users/logout", (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV,
    sameSite: 'strict'
  });
  res.status(200).json({ message: "Logged out successfully" });
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

// Middleware to authenticate and get userId from JWT cookie
function authenticate(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

// GET /watchlist - fetch current user's watchlist
app.get("/watchlist", authenticate, async (req, res) => {
  try {
    let watchlist = await WatchlistModel.findOne({ user: req.userId });
    if (!watchlist) {
      // If not found, create an empty watchlist for the user
      watchlist = await WatchlistModel.create({ user: req.userId, items: [] });
    }
    res.json(watchlist.items);
  } catch (err) {
    console.error("Fetch watchlist error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /watchlist - add a stock to the watchlist
app.post("/watchlist", authenticate, async (req, res) => {
  const { name, price, percent, isDown } = req.body;
  if (!name || price === undefined || percent === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!allowedStocks.includes(name)) {
    return res.status(400).json({ error: "Stock not allowed" });
  }
  try {
    let watchlist = await WatchlistModel.findOne({ user: req.userId });
    if (!watchlist) {
      watchlist = await WatchlistModel.create({ user: req.userId, items: [] });
    }
    // Prevent duplicates
    if (watchlist.items.some(item => item.name === name)) {
      return res.status(400).json({ error: "Stock already in watchlist" });
    }
    watchlist.items.push({ name, price, percent, isDown });
    await watchlist.save();
    res.status(201).json(watchlist.items);
  } catch (err) {
    console.error("Add to watchlist error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /watchlist/:stockName - remove a stock from the watchlist
app.delete("/watchlist/:stockName", authenticate, async (req, res) => {
  const { stockName } = req.params;
  try {
    let watchlist = await WatchlistModel.findOne({ user: req.userId });
    if (!watchlist) {
      return res.status(404).json({ error: "Watchlist not found" });
    }
    const initialLength = watchlist.items.length;
    watchlist.items = watchlist.items.filter(item => item.name !== stockName);
    if (watchlist.items.length === initialLength) {
      return res.status(404).json({ error: "Stock not found in watchlist" });
    }
    await watchlist.save();
    res.json(watchlist.items);
  } catch (err) {
    console.error("Remove from watchlist error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /summary - returns summary data for the logged-in user
app.get("/summary", authenticate, async (req, res) => {
  try {
    // Mock values for margin and balance
    const marginAvailable = 3740;
    const marginsUsed = 0;
    const openingBalance = 3740;

    // Aggregate holdings for the user (for now, all holdings are global)
    const holdings = await HoldingsModel.find({});
    const holdingsCount = holdings.length;
    const currentValue = holdings.reduce((sum, h) => sum + (h.price * h.qty), 0);
    const investment = holdings.reduce((sum, h) => sum + (h.avg * h.qty), 0);
    const pnl = currentValue - investment;
    const pnlPercent = investment > 0 ? ((pnl / investment) * 100).toFixed(2) : 0;

    // Additional Metrics
    // Parse day as float (remove % if present)
    const parseDay = (h) => {
      if (!h.day) return 0;
      if (typeof h.day === 'number') return h.day;
      return parseFloat(h.day.replace('%', '')) || 0;
    };
    const dayChange = holdings.reduce((sum, h) => sum + parseDay(h), 0);
    let bestPerformer = null;
    let worstPerformer = null;
    if (holdings.length > 0) {
      bestPerformer = holdings.reduce((best, h) => parseDay(h) > parseDay(best) ? h : best, holdings[0]);
      worstPerformer = holdings.reduce((worst, h) => parseDay(h) < parseDay(worst) ? h : worst, holdings[0]);
    }
    const lastUpdated = new Date().toISOString();

    res.json({
      marginAvailable,
      marginsUsed,
      openingBalance,
      holdingsCount,
      pnl,
      pnlPercent,
      currentValue,
      investment,
      dayChange,
      bestPerformer: bestPerformer ? {
        name: bestPerformer.name,
        day: bestPerformer.day,
        price: bestPerformer.price,
        qty: bestPerformer.qty
      } : null,
      worstPerformer: worstPerformer ? {
        name: worstPerformer.name,
        day: worstPerformer.day,
        price: worstPerformer.price,
        qty: worstPerformer.qty
      } : null,
      lastUpdated
    });
  } catch (err) {
    console.error("Summary endpoint error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /orders - fetch all orders (for now, global)
app.get("/orders", authenticate, async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    console.error("Fetch orders error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /holdings - fetch holdings for the logged-in user
app.get("/holdings", authenticate, async (req, res) => {
  try {
    let holdings = await HoldingsModel.find({ user: req.userId });
    // Calculate net and day for each holding
    holdings = holdings.map(h => {
      const net = h.avg && h.avg !== 0 ? (((h.price - h.avg) / h.avg) * 100).toFixed(2) + '%' : '0.00%';
      // Placeholder for day change, update if you have day-specific logic
      const day = h.day && h.day !== '' ? h.day : '0.00';
      return { ...h.toObject(), net, day };
    });
    res.json(holdings);
  } catch (err) {
    console.error("Fetch user holdings error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /holdings/buy - buy shares (add or update holding)
app.post("/holdings/buy", authenticate, async (req, res) => {
  const { name, qty, price } = req.body;
  if (!name || !qty || !price || qty <= 0 || price <= 0) {
    return res.status(400).json({ error: "Invalid input" });
  }
  try {
    let holding = await HoldingsModel.findOne({ user: req.userId, name });
    if (holding) {
      // Update avg price and qty
      const totalQty = holding.qty + qty;
      const totalCost = holding.avg * holding.qty + price * qty;
      holding.avg = totalCost / totalQty;
      holding.qty = totalQty;
      holding.price = price;
      await holding.save();
    } else {
      holding = await HoldingsModel.create({ user: req.userId, name, qty, avg: price, price });
    }
    // Create order record
    await OrdersModel.create({
      user: req.userId,
      name,
      qty,
      price,
      mode: "buy",
      createdAt: new Date()
    });
    res.json(holding);
  } catch (err) {
    console.error("Buy holding error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /holdings/sell - sell shares (decrease or remove holding)
app.post("/holdings/sell", authenticate, async (req, res) => {
  const { name, qty, price } = req.body;
  if (!name || !qty || !price || qty <= 0 || price <= 0) {
    return res.status(400).json({ error: "Invalid input" });
  }
  try {
    let holding = await HoldingsModel.findOne({ user: req.userId, name });
    if (!holding || holding.qty < qty) {
      return res.status(400).json({ error: "Not enough shares to sell" });
    }
    holding.qty -= qty;
    holding.price = price;
    if (holding.qty === 0) {
      await HoldingsModel.deleteOne({ _id: holding._id });
      // Create order record
      await OrdersModel.create({
        user: req.userId,
        name,
        qty,
        price,
        mode: "sell",
        createdAt: new Date()
      });
      res.json({ message: "Holding removed" });
    } else {
      await holding.save();
      // Create order record
      await OrdersModel.create({
        user: req.userId,
        name,
        qty,
        price,
        mode: "sell",
        createdAt: new Date()
      });
      res.json(holding);
    }
  } catch (err) {
    console.error("Sell holding error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /positions - fetch positions for the logged-in user
app.get("/positions", authenticate, async (req, res) => {
  try {
    const positions = await PositionsModel.find({ user: req.userId });
    res.json(positions);
  } catch (err) {
    console.error("Fetch user positions error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /positions - create a new position
app.post("/positions", authenticate, async (req, res) => {
  const { product, name, qty, avg, price, net, day, isLoss } = req.body;

  if (!product || !name || !qty || !avg || !price) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newPosition = await PositionsModel.create({
      user: req.userId,
      product,
      name,
      qty,
      avg,
      price,
      net: net || "0%",
      day: day || "0%",
      isLoss: isLoss || false
    });

    res.status(201).json(newPosition);
  } catch (err) {
    console.error("Create position error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /funds - fetch funds for the logged-in user
app.get("/funds", authenticate, async (req, res) => {
  try {
    let funds = await FundsModel.findOne({ user: req.userId });
    if (!funds) {
      // If not found, create default funds for the user
      funds = await FundsModel.create({
        user: req.userId,
        availableMargin: 3740,
        usedMargin: 0,
        availableCash: 3740,
        openingBalance: 3740,
        payin: 3740
      });
    }
    res.json(funds);
  } catch (err) {
    console.error("Fetch funds error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /funds/add - add funds to user's account
app.post("/funds/add", authenticate, async (req, res) => {
  const { amount } = req.body;
  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    let funds = await FundsModel.findOne({ user: req.userId });
    if (!funds) {
      funds = await FundsModel.create({ user: req.userId });
    }

    funds.availableMargin += amount;
    funds.availableCash += amount;
    funds.openingBalance += amount;
    funds.payin += amount;
    funds.lastUpdated = new Date();

    await funds.save();
    res.json(funds);
  } catch (err) {
    console.error("Add funds error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /funds/withdraw - withdraw funds from user's account
app.post("/funds/withdraw", authenticate, async (req, res) => {
  const { amount } = req.body;
  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    let funds = await FundsModel.findOne({ user: req.userId });
    if (!funds) {
      return res.status(404).json({ error: "Funds not found" });
    }

    if (funds.availableCash < amount) {
      return res.status(400).json({ error: "Insufficient funds" });
    }

    funds.availableMargin -= amount;
    funds.availableCash -= amount;
    funds.openingBalance -= amount;
    funds.lastUpdated = new Date();

    await funds.save();
    res.json(funds);
  } catch (err) {
    console.error("Withdraw funds error:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
