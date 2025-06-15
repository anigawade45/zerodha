import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import "./Holdings.css";

const API_URL = process.env.REACT_APP_API_URL;

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("name-az");
  const [filterType, setFilterType] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    setError("");
    axios
      .get(`${API_URL}/holdings`, { withCredentials: true })
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch(() => {
        setError("Failed to load holdings");
      })
      .finally(() => setLoading(false));
  }, []);

  // Filtering
  let filteredHoldings = allHoldings.filter(h => {
    let typeMatch = filterType === "all" || (filterType === "profit" ? (h.price * h.qty - h.avg * h.qty) >= 0 : (h.price * h.qty - h.avg * h.qty) < 0);
    let searchMatch = !search || (h.name && h.name.toLowerCase().includes(search.toLowerCase()));
    return typeMatch && searchMatch;
  });

  // Sorting
  filteredHoldings = filteredHoldings.slice().sort((a, b) => {
    if (sortBy === "name-az") return (a.name || "").localeCompare(b.name || "");
    if (sortBy === "name-za") return (b.name || "").localeCompare(a.name || "");
    if (sortBy === "qty") return b.qty - a.qty;
    if (sortBy === "avg") return b.avg - a.avg;
    if (sortBy === "ltp") return b.price - a.price;
    if (sortBy === "pnl") return (b.price * b.qty - b.avg * b.qty) - (a.price * a.qty - a.avg * a.qty);
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(filteredHoldings.length / pageSize) || 1;
  const paginatedHoldings = filteredHoldings.slice((page - 1) * pageSize, page * pageSize);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // Dynamic summary calculations
  const totalInvestment = allHoldings.reduce((sum, h) => sum + h.avg * h.qty, 0);
  const currentValue = allHoldings.reduce((sum, h) => sum + h.price * h.qty, 0);
  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment > 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : 0;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {/* Controls */}
      {allHoldings.length > 0 && (
        <div className="holdings-controls">
          <div>
            <label>Sort by: </label>
            <select value={sortBy} onChange={e => { setSortBy(e.target.value); setPage(1); }}>
              <option value="name-az">Name (A-Z)</option>
              <option value="name-za">Name (Z-A)</option>
              <option value="qty">Quantity</option>
              <option value="avg">Avg. Cost</option>
              <option value="ltp">LTP</option>
              <option value="pnl">P&L</option>
            </select>
          </div>
          <div>
            <label>Type: </label>
            <select value={filterType} onChange={e => { setFilterType(e.target.value); setPage(1); }}>
              <option value="all">All</option>
              <option value="profit">Profit</option>
              <option value="loss">Loss</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search stock..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="holdings-search"
            />
          </div>
        </div>
      )}

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div className="spinner" style={{ width: 32, height: 32, border: '4px solid #1976d2', borderTop: '4px solid #fff', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }} />
        </div>
      ) : error ? (
        <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
      ) : filteredHoldings.length === 0 ? (
        <div className="holdings-empty-state">
          <div className="holdings-empty-illustration" role="img" aria-label="No holdings">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="45" cy="45" r="45" fill="#f4f8fb"/>
              <rect x="22" y="55" width="46" height="10" rx="5" fill="#e3eafc"/>
              <rect x="30" y="35" width="30" height="20" rx="4" fill="#cfd8dc"/>
              <rect x="38" y="40" width="14" height="6" rx="2" fill="#b0bec5"/>
            </svg>
          </div>
          <div className="holdings-empty-message">
            <h4>No holdings found</h4>
            <p>Looks like you don't have any holdings yet.<br/>Start investing to see your portfolio grow!</p>
          </div>
        </div>
      ) : (
        <>
          <div className="holdings-table-wrapper">
            <table className="holdings-table">
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>
              </thead>
              <tbody>
                {paginatedHoldings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td className={profClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={profClass}>{
                        stock.net && stock.net !== '' ? stock.net : '0.00'
                      }</td>
                      <td className={dayClass}>{
                        stock.day && stock.day !== '' ? stock.day : '0.00'
                      }</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="holdings-pagination">
              <button
                className="holdings-page-btn"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="holdings-page-info">
                Page {page} of {totalPages}
              </span>
              <button
                className="holdings-page-btn"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}

          <div className="holdings-summary-row row">
            <div className="col">
              <h5>
                {totalInvestment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </h5>
              <p>Total investment</p>
            </div>
            <div className="col">
              <h5>
                {currentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </h5>
              <p>Current value</p>
            </div>
            <div className="col">
              <h5 className={pnl >= 0 ? "profit" : "loss"}>
                {pnl.toLocaleString(undefined, { maximumFractionDigits: 2 })} ({pnlPercent}%)
              </h5>
              <p>P&L</p>
            </div>
          </div>
          <VerticalGraph data={data} />
        </>
      )}
    </>
  );
};

export default Holdings;
