import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Orders.css";

const API_URL = process.env.REACT_APP_API_URL;

// Utility for relative/short date formatting
function formatOrderDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffHr < 24) return `${diffHr} hr${diffHr > 1 ? 's' : ''} ago`;
  // Show as DD/MM/YY, HH:mm
  return date.toLocaleString(undefined, {
    day: '2-digit', month: '2-digit', year: '2-digit',
    hour: '2-digit', minute: '2-digit',
    hour12: false
  });
}

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");
  const [filterMode, setFilterMode] = useState("all");
  const [filterStock, setFilterStock] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`${API_URL}/orders`, { withCredentials: true });
        setOrders(res.data);
      } catch (err) {
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Get unique stock names for filter dropdown
  const stockOptions = Array.from(new Set(orders.map(o => o.name))).filter(Boolean);

  // Filtering
  let filteredOrders = orders.filter(o => {
    let modeMatch = filterMode === "all" || (o.mode && o.mode.toLowerCase() === filterMode);
    let stockMatch = !filterStock || o.name === filterStock;
    return modeMatch && stockMatch;
  });

  // Sorting
  filteredOrders = filteredOrders.slice().sort((a, b) => {
    if (sortBy === "date-desc") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortBy === "date-asc") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sortBy === "stock-az") {
      return (a.name || "").localeCompare(b.name || "");
    } else if (sortBy === "stock-za") {
      return (b.name || "").localeCompare(a.name || "");
    } else if (sortBy === "mode-buy") {
      return (b.mode === "buy" ? 1 : 0) - (a.mode === "buy" ? 1 : 0);
    } else if (sortBy === "mode-sell") {
      return (b.mode === "sell" ? 1 : 0) - (a.mode === "sell" ? 1 : 0);
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / pageSize) || 1;
  const paginatedOrders = filteredOrders.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="orders">
      {/* Sorting & Filtering Controls */}
      {orders.length > 0 && (
        <div className="order-controls">
          <div>
            <label>Sort by: </label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="date-desc">Date (Newest)</option>
              <option value="date-asc">Date (Oldest)</option>
              <option value="stock-az">Stock (A-Z)</option>
              <option value="stock-za">Stock (Z-A)</option>
              <option value="mode-buy">Mode (BUY first)</option>
              <option value="mode-sell">Mode (SELL first)</option>
            </select>
          </div>
          <div>
            <label>Mode: </label>
            <select value={filterMode} onChange={e => setFilterMode(e.target.value)}>
              <option value="all">All</option>
              <option value="buy">BUY</option>
              <option value="sell">SELL</option>
            </select>
          </div>
          <div>
            <label>Stock: </label>
            <select value={filterStock} onChange={e => setFilterStock(e.target.value)}>
              <option value="">All</option>
              {stockOptions.map(stock => (
                <option key={stock} value={stock}>{stock}</option>
              ))}
            </select>
          </div>
        </div>
      )}
      {/* Order Summary */}
      {orders.length > 0 && (
        <div className="order-summary">
          <div>Total Orders: <b>{orders.length}</b></div>
          <div>BUY: <b style={{ color: '#28a745' }}>{orders.filter(o => o.mode && o.mode.toLowerCase() === 'buy').length}</b></div>
          <div>SELL: <b style={{ color: '#dc3545' }}>{orders.filter(o => o.mode && o.mode.toLowerCase() === 'sell').length}</b></div>
          <div>Most Traded: <b>{(() => {
            if (!orders.length) return '-';
            const freq = {};
            orders.forEach(o => { freq[o.name] = (freq[o.name] || 0) + 1; });
            return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
          })()}</b></div>
        </div>
      )}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div className="spinner" style={{ width: 32, height: 32, border: '4px solid #1976d2', borderTop: '4px solid #fff', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }} />
        </div>
      ) : error ? (
        <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
      ) : orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table-area">
          <div className="order-table-wrapper">
            <table className="order-table">
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Mode</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {paginatedOrders.map((order, idx) => (
                  <tr key={order._id || idx}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price}</td>
                    <td>
                      <span className={order.mode && order.mode.toLowerCase() === 'buy' ? 'buy-text' : 'sell-text'}>
                        {order.mode ? order.mode.toUpperCase() : ''}
                      </span>
                    </td>
                    <td>
                      <span className="order-date-cell">
                        {formatOrderDate(order.createdAt)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="order-pagination">
              <button
                className="order-page-btn"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="order-page-info">
                Page {page} of {totalPages}
              </span>
              <button
                className="order-page-btn"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
