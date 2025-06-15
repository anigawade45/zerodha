import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Positions.css";
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;
const POLLING_INTERVAL = 5000; // Poll every 5 seconds
const PAGE_SIZE = 10;

// Product options
const PRODUCT_OPTIONS = [
  // Cash and Carry
  "CNC", "MIS", "NRML",
  // Futures
  "FUT", "FUTSTK", "FUTIDX", "FUTCOM", "FUTCUR", "FUTIRT", "FUTIRD",
  // Options
  "OPT", "OPTSTK", "OPTIDX", "OPTCOM", "OPTCUR", "OPTIRT", "OPTIRD",
  // Bracket Orders
  "BO", "CO",
  // Currency
  "CUR", "CURSTK", "CURIDX",
  // Commodity
  "COM", "COMSTK", "COMIDX",
  // Currency Derivatives
  "CURDER", "CURDERSTK", "CURDERIDX",
  // Interest Rate Derivatives
  "IRDER", "IRDERSTK", "IRDERIDX",
  // Currency Options
  "CUROPT", "CUROPTSTK", "CUROPTIDX",
  // Commodity Options
  "COMOPT", "COMOPTSTK", "COMOPTIDX",
  // Interest Rate Options
  "IROPT", "IROPTSTK", "IROPTIDX",
  // Currency Futures
  "CURFUT", "CURFUTSTK", "CURFUTIDX",
  // Commodity Futures
  "COMFUT", "COMFUTSTK", "COMFUTIDX",
  // Interest Rate Futures
  "IRFUT", "IRFUTSTK", "IRFUTIDX"
];

// Instrument options (Nifty 50 stocks)
const INSTRUMENT_OPTIONS = [
  "ADANIENT", "ADANIPORTS", "APOLLOHOSP", "ASIANPAINT", "AXISBANK",
  "BAJAJ-AUTO", "BAJFINANCE", "BAJAJFINSV", "BPCL", "BHARTIARTL",
  "BRITANNIA", "CIPLA", "COALINDIA", "DIVISLAB", "DRREDDY",
  "EICHERMOT", "GRASIM", "HCLTECH", "HDFCBANK", "HDFCLIFE",
  "HEROMOTOCO", "HINDALCO", "HINDUNILVR", "ICICIBANK", "ITC",
  "INDUSINDBK", "INFY", "JSWSTEEL", "KOTAKBANK", "LTIM",
  "LT", "M&M", "MARUTI", "NESTLEIND", "NTPC",
  "ONGC", "POWERGRID", "RELIANCE", "SBILIFE", "SBIN",
  "SUNPHARMA", "TATACONSUM", "TATAMOTORS", "TATASTEEL", "TCS",
  "TECHM", "TITAN", "ULTRACEMCO", "UPL", "WIPRO"
];

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const prevPositionsRef = useRef([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPosition, setNewPosition] = useState({
    product: "CNC",
    name: "",
    qty: "",
    avg: "",
    price: "",
    net: "0%",
    day: "0%",
    isLoss: false
  });
  const [sortBy, setSortBy] = useState("name-az");
  const [filterType, setFilterType] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchPositions = async () => {
    try {
      const res = await axios.get(`${API_URL}/positions`, { withCredentials: true });
      const newPositions = res.data;
      
      // Check for changes and show notification
      if (prevPositionsRef.current.length > 0) {
        const changes = detectChanges(prevPositionsRef.current, newPositions);
        if (changes.length > 0) {
          toast.info(`Positions updated: ${changes.join(", ")}`);
        }
      }
      
      setPositions(newPositions);
      prevPositionsRef.current = newPositions;
      setError("");
    } catch (err) {
      setError("Failed to load positions");
      console.error("Error fetching positions:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPosition = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/positions`, newPosition, { withCredentials: true });
      setPositions([...positions, response.data]);
      setShowAddForm(false);
      setNewPosition({
        product: "CNC",
        name: "",
        qty: "",
        avg: "",
        price: "",
        net: "0%",
        day: "0%",
        isLoss: false
      });
      toast.success(`New position added: ${response.data.name}`);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add position");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPosition(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to detect changes in positions
  const detectChanges = (oldPositions, newPositions) => {
    const changes = [];
    
    // Check for new positions
    newPositions.forEach(newPos => {
      const oldPos = oldPositions.find(p => p.name === newPos.name);
      if (!oldPos) {
        changes.push(`New position: ${newPos.name}`);
      } else {
        // Check for price changes
        if (oldPos.price !== newPos.price) {
          changes.push(`${newPos.name} price: ${oldPos.price} → ${newPos.price}`);
        }
        // Check for quantity changes
        if (oldPos.qty !== newPos.qty) {
          changes.push(`${newPos.name} quantity: ${oldPos.qty} → ${newPos.qty}`);
        }
      }
    });

    // Check for closed positions
    oldPositions.forEach(oldPos => {
      if (!newPositions.find(p => p.name === oldPos.name)) {
        changes.push(`Position closed: ${oldPos.name}`);
      }
    });

    return changes;
  };

  useEffect(() => {
    // Initial fetch
    fetchPositions();

    // Set up polling
    const pollInterval = setInterval(fetchPositions, POLLING_INTERVAL);

    // Cleanup interval on component unmount
    return () => clearInterval(pollInterval)
  }, []);

  // Filtering
  let filteredPositions = positions.filter(p => {
    let typeMatch = filterType === "all" || 
      (filterType === "profit" ? (p.price * p.qty - p.avg * p.qty) >= 0 : (p.price * p.qty - p.avg * p.qty) < 0);
    let searchMatch = !search || 
      (p.name && p.name.toLowerCase().includes(search.toLowerCase())) ||
      (p.product && p.product.toLowerCase().includes(search.toLowerCase()));
    return typeMatch && searchMatch;
  });

  // Sorting
  filteredPositions = filteredPositions.slice().sort((a, b) => {
    if (sortBy === "name-az") return (a.name || "").localeCompare(b.name || "");
    if (sortBy === "name-za") return (b.name || "").localeCompare(a.name || "");
    if (sortBy === "product") return (a.product || "").localeCompare(b.product || "");
    if (sortBy === "qty") return b.qty - a.qty;
    if (sortBy === "avg") return b.avg - a.avg;
    if (sortBy === "ltp") return b.price - a.price;
    if (sortBy === "pnl") return (b.price * b.qty - b.avg * b.qty) - (a.price * a.qty - a.avg * a.qty);
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPositions.length / PAGE_SIZE) || 1;
  const paginatedPositions = filteredPositions.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Calculate summary metrics
  const totalPnL = positions.reduce((sum, stock) => {
    const curValue = stock.price * stock.qty;
    const avgValue = stock.avg * stock.qty;
    return sum + (curValue - avgValue);
  }, 0);

  const totalInvestment = positions.reduce((sum, stock) => sum + (stock.avg * stock.qty), 0);
  const currentValue = positions.reduce((sum, stock) => sum + (stock.price * stock.qty), 0);
  const pnlPercent = totalInvestment > 0 ? ((totalPnL / totalInvestment) * 100).toFixed(2) : 0;

  return (
    <div className="positions-container">
      <div className="positions-header">
        <h3 className="title">Positions ({positions.length})</h3>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="add-position-btn"
        >
          {showAddForm ? 'Cancel' : 'Add Position'}
        </button>
      </div>

      {showAddForm && (
        <div className="add-position-form">
          <h4>Add New Position</h4>
          <form onSubmit={handleAddPosition}>
            <div className="form-grid">
              <div className="form-group">
                <label>Product Type:</label>
                <select 
                  name="product" 
                  value={newPosition.product} 
                  onChange={handleInputChange}
                  required
                >
                  {PRODUCT_OPTIONS.map((product, index) => (
                    <option key={index} value={product}>{product}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Instrument:</label>
                <select
                  name="name"
                  value={newPosition.name}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Instrument</option>
                  {INSTRUMENT_OPTIONS.map((instrument, index) => (
                    <option key={index} value={instrument}>{instrument}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Quantity:</label>
                <input
                  type="number"
                  name="qty"
                  value={newPosition.qty}
                  onChange={handleInputChange}
                  placeholder="Enter quantity"
                  required
                  min="1"
                />
              </div>
              <div className="form-group">
                <label>Average Price:</label>
                <input
                  type="number"
                  name="avg"
                  value={newPosition.avg}
                  onChange={handleInputChange}
                  placeholder="Enter average price"
                  required
                  step="0.01"
                  min="0"
                />
              </div>
              <div className="form-group">
                <label>Current Price:</label>
                <input
                  type="number"
                  name="price"
                  value={newPosition.price}
                  onChange={handleInputChange}
                  placeholder="Enter current price"
                  required
                  step="0.01"
                  min="0"
                />
              </div>
            </div>
            <div className="form-actions">
              <button type="button" onClick={() => setShowAddForm(false)} className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Add Position
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          {positions.length > 0 && (
            <div className="positions-controls">
              <div className="control-group">
                <label>Sort by: </label>
                <select value={sortBy} onChange={e => { setSortBy(e.target.value); setPage(1); }}>
                  <option value="name-az">Name (A-Z)</option>
                  <option value="name-za">Name (Z-A)</option>
                  <option value="product">Product</option>
                  <option value="qty">Quantity</option>
                  <option value="avg">Avg. Cost</option>
                  <option value="ltp">LTP</option>
                  <option value="pnl">P&L</option>
                </select>
              </div>
              <div className="control-group">
                <label>Type: </label>
                <select value={filterType} onChange={e => { setFilterType(e.target.value); setPage(1); }}>
                  <option value="all">All</option>
                  <option value="profit">Profit</option>
                  <option value="loss">Loss</option>
                </select>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={search}
                  onChange={e => { setSearch(e.target.value); setPage(1); }}
                  className="search-input"
                />
              </div>
            </div>
          )}

          <div className="positions-summary">
            <div className="summary-item">
              <h5>Total Investment</h5>
              <p>{totalInvestment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            </div>
            <div className="summary-item">
              <h5>Current Value</h5>
              <p>{currentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            </div>
            <div className="summary-item">
              <h5>P&L</h5>
              <p className={totalPnL >= 0 ? "profit" : "loss"}>
                {totalPnL.toLocaleString(undefined, { maximumFractionDigits: 2 })} ({pnlPercent}%)
              </p>
            </div>
          </div>

          <div className="positions-table-wrapper">
            <table className="positions-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg.</th>
                  <th>LTP</th>
                  <th>P&L</th>
                  <th>Chg.</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPositions.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const avgValue = stock.avg * stock.qty;
                  const pnl = curValue - avgValue;
                  const isProfit = pnl >= 0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={profClass}>{pnl.toFixed(2)}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="page-btn"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="page-info">
                Page {page} of {totalPages}
              </span>
              <button
                className="page-btn"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Positions;
