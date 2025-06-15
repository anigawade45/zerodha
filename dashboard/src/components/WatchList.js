import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  DeleteOutline,
} from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";
import { allowedStocks } from "../data/allowedStocks";
import BuySellModal from "./BuySellModal";
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;

const WatchList = () => {
  const [search, setSearch] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addForm, setAddForm] = useState({ name: "", price: "", percent: "", isDown: false });
  const [adding, setAdding] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("buy");
  const [modalStock, setModalStock] = useState(null);

  // Fetch watchlist from backend
  useEffect(() => {
    const fetchWatchlist = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`${API_URL}/watchlist`, { withCredentials: true });
        setWatchlist(res.data);
      } catch (err) {
        setError("Failed to fetch watchlist");
      } finally {
        setLoading(false);
      }
    };
    fetchWatchlist();
  }, []);

  // Filtered list based on search
  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase())
  );

  // Filter out stocks already in watchlist from dropdown
  const availableStocks = allowedStocks.filter(
    (stock) => !watchlist.some((item) => item.name === stock)
  );

  const data = {
    labels: filteredWatchlist.map((subArray) => subArray["name"]),
    datasets: [
      {
        label: "Price",
        data: filteredWatchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Add stock to watchlist
  const handleAddStock = async (e) => {
    e.preventDefault();
    setAdding(true);
    setError("");
    try {
      const res = await axios.post(
        `${API_URL}/watchlist`,
        {
          name: addForm.name,
          price: Number(addForm.price),
          percent: addForm.percent,
          isDown: addForm.isDown,
        },
        { withCredentials: true }
      );
      setWatchlist(res.data);
      setAddForm({ name: "", price: "", percent: "", isDown: false });
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add stock");
    } finally {
      setAdding(false);
    }
  };

  // Remove stock from watchlist
  const handleRemoveStock = async (name) => {
    setError("");
    try {
      const res = await axios.delete(`${API_URL}/watchlist/${encodeURIComponent(name)}`, { withCredentials: true });
      setWatchlist(res.data);
    } catch (err) {
      setError("Failed to remove stock");
    }
  };

  // Open modal for buy or sell
  const handleOpenModal = (stock, action) => {
    setModalStock(stock);
    setModalAction(action);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);
  const handleConfirmModal = async (data) => {
    if (!modalStock) return;
    try {
      const endpoint = data.action === "buy" ? "/holdings/buy" : "/holdings/sell";
      await axios.post(
        `${API_URL}${endpoint}`,
        {
          name: modalStock.name,
          qty: data.qty,
          price: data.price,
        },
        { withCredentials: true }
      );
      setModalOpen(false);
      toast.success(`${data.action === "buy" ? "Buy" : "Sell"} order placed for ${modalStock.name}`);
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to process transaction");
    }
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="counts"> {filteredWatchlist.length} / 50</span>
      </div>

      {error && <div className="error">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <form className="add-stock-form" onSubmit={handleAddStock} style={{ marginBottom: 10, flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: 7, width: '100%' }}>
              <select
                className="stock-select"
                value={addForm.name}
                onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
                required
              >
                <option value="" disabled>
                  Select Stock
                </option>
                {availableStocks.map((stock) => (
                  <option key={stock} value={stock}>
                    {stock}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Price"
                value={addForm.price}
                onChange={(e) => setAddForm({ ...addForm, price: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Percent (e.g. +2.5%)"
                value={addForm.percent}
                onChange={(e) => setAddForm({ ...addForm, percent: e.target.value })}
                required
              />
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 7, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <label style={{ margin: 0 }}>
                <input
                  type="checkbox"
                  checked={addForm.isDown}
                  onChange={(e) => setAddForm({ ...addForm, isDown: e.target.checked })}
                />
                Down?
              </label>
              <button type="submit" disabled={adding || !addForm.name}>
                {adding ? "Adding..." : "Add Stock"}
              </button>
            </div>
          </form>

          <ul className="list">
            {filteredWatchlist.map((stock, index) => {
              return (
                <WatchListItem
                  stock={stock}
                  key={index}
                  onRemove={handleRemoveStock}
                  onBuy={() => handleOpenModal(stock, "buy")}
                  onSell={() => handleOpenModal(stock, "sell")}
                />
              );
            })}
          </ul>
        </>
      )}

      <DoughnutChart data={data} />
      <BuySellModal
        open={modalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
        stock={modalStock}
        action={modalAction}
      />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, onRemove, onBuy, onSell }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: "relative" }}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className={`percent ${stock.isDown ? "down" : "up"}`}>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className={`price ${stock.isDown ? "down" : "up"}`}>{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} onRemove={onRemove} onBuy={onBuy} onSell={onSell} />}
    </li>
  );
};

const WatchListActions = ({ uid, onRemove, onBuy, onSell }) => {

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={onBuy}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={onSell}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="Delete" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" onClick={() => onRemove(uid)} style={{ color: '#e53935' }}>
            <DeleteOutline className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
