import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { AccountBalance, ShowChart } from "@mui/icons-material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;

const Summary = () => {
  const { user, loading: userLoading } = useContext(UserContext);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchSummary = async () => {
    setRefreshing(true);
    setError("");
    try {
      const res = await axios.get(`${API_URL}/summary`, { withCredentials: true });
      setSummary(res.data);
      if (!loading) toast.success("Summary refreshed!");
    } catch (err) {
      if (err.response?.status === 401) {
        window.location.href = "/login";
      } else {
        setError("Failed to load summary data");
        toast.error("Failed to load summary data");
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchSummary();
  }, []);

  const handlePerformerClick = (type) => {
    const performer = type === 'best' ? summary.bestPerformer : summary.worstPerformer;
    if (performer) {
      toast.info(`${type === 'best' ? 'Best' : 'Worst'} Performer: ${performer.name} | Day Change: ${performer.day} | Price: ₹${performer.price} | Qty: ${performer.qty}`);
    }
  };

  return (
    <div className="summary-container">
      <div className="summary-header">
        <h2>Hi, {userLoading ? 'Loading...' : user?.name || 'User'}!</h2>
        <p className="date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading your portfolio...</p>
          </div>
      ) : error ? (
        <div className="error-container">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : summary && (
        <>
          <div className="summary-section">
            <div className="section-header">
              <AccountBalance className="section-icon equity-icon" />
              <h3>Equity</h3>
      </div>

            <div className="section-content">
              <div className="main-value">
                <h2>₹{summary.marginAvailable.toLocaleString()}</h2>
                <p>Margin Available</p>
              </div>

              <div className="sub-values">
                <div className="sub-value">
                  <span>Margins Used</span>
                  <span>₹{summary.marginsUsed.toLocaleString()}</span>
                </div>
                <div className="sub-value">
                  <span>Opening Balance</span>
                  <span>₹{summary.openingBalance.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="summary-section">
            <div className="section-header">
              <ShowChart className="section-icon holdings-icon" />
              <h3>Holdings ({summary.holdingsCount})</h3>
            </div>

            <div className="section-content">
              <div className="main-value">
                <h2 
                  className={summary.pnl >= 0 ? "profit" : "loss"}
                  title="Profit & Loss: The difference between your current value and investment."
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  ₹{summary.pnl.toLocaleString()}
                  <span 
                    className={summary.pnl >= 0 ? "profit-percent" : "loss-percent"}
                    style={{ fontSize: '1rem', marginLeft: 4 }}
                  >
                    {summary.pnlPercent > 0 ? "+" : ""}{Number(summary.pnlPercent || 0).toFixed(2)}%
                  </span>
                </h2>
                <p style={{ fontSize: '0.95rem' }}>P&amp;L <span style={{ fontSize: '1rem', cursor: 'help' }} title="Profit & Loss: The difference between your current value and investment.">ℹ️</span></p>
              </div>

              <div className="sub-values">
                <div className="sub-value">
                  <span>Current Value</span>
                  <span>₹{summary.currentValue.toLocaleString()}</span>
                </div>
                <div className="sub-value">
                  <span>Investment</span>
                  <span>₹{summary.investment.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Highlights Section */}
          <div className="summary-section highlights-section">
            <div className="section-header">
              <span role="img" aria-label="sparkles" className="section-icon highlights-icon">✨</span>
              <h3>Today's Highlights</h3>
              <button className="refresh-btn" onClick={fetchSummary} title="Refresh Summary" disabled={refreshing}>
                {refreshing ? 'Refreshing...' : '⟳'}
              </button>
            </div>
            <div className="section-content highlights-content">
              <div className="highlight-item">
                <span className="highlight-label">
                  Day Change
                  <InfoOutlinedIcon className="info-icon" titleAccess="Total percentage and absolute change in your portfolio value today." />
                </span>
                <span className={summary.dayChange >= 0 ? "profit" : "loss"}>
                  {summary.dayChange >= 0 ? "+" : ""}{Number(summary.dayChange || 0).toFixed(2)}%
                  &nbsp;
                  <span className="abs-value">(
                    {summary.currentValue && summary.investment ?
                      `₹${(summary.currentValue - summary.investment).toLocaleString(undefined, { maximumFractionDigits: 2 })}` : "-"}
                  )</span>
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-label">
                  Best Performer
                  <InfoOutlinedIcon className="info-icon" titleAccess="Stock with the highest positive day change." />
                </span>
                {summary.bestPerformer ? (
                  <span className="highlight-value performer-link" onClick={() => handlePerformerClick('best')} title="Click for details">
                    <span className="trend-arrow up">▲</span> {summary.bestPerformer.name} ({summary.bestPerformer.day})
                  </span>
                ) : <span className="highlight-value">-</span>}
              </div>
              <div className="highlight-item">
                <span className="highlight-label">
                  Worst Performer
                  <InfoOutlinedIcon className="info-icon" titleAccess="Stock with the highest negative day change." />
                </span>
                {summary.worstPerformer ? (
                  <span className="highlight-value performer-link" onClick={() => handlePerformerClick('worst')} title="Click for details">
                    <span className="trend-arrow down">▼</span> {summary.worstPerformer.name} ({summary.worstPerformer.day})
                  </span>
                ) : <span className="highlight-value">-</span>}
              </div>
              <div className="highlight-item">
                <span className="highlight-label">
                  Last Updated
                  <InfoOutlinedIcon className="info-icon" titleAccess="The time this summary was last refreshed." />
                </span>
                <span className="highlight-value">
                  {new Date(summary.lastUpdated).toLocaleString()}
                </span>
          </div>
        </div>
      </div>
    </>
      )}

      <style jsx>{`
        .summary-container {
          padding: 1.5rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .summary-header {
          margin-bottom: 1.5rem;
        }

        .summary-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #333;
        }

        .date {
          margin: 0.5rem 0 0;
          color: #666;
          font-size: 0.9rem;
        }

        .loading-container {
          text-align: center;
          padding: 2rem;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #1976d2;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-container {
          text-align: center;
          padding: 2rem;
          color: #dc3545;
        }

        .error-container button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background: #dc3545;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .error-container button:hover {
          background: #c82333;
        }

        .summary-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1.25rem;
          margin-bottom: 1rem;
        }

        .summary-section:last-child {
          margin-bottom: 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .section-icon {
          color: #1976d2;
          margin-right: 0.5rem;
          font-size: 2rem !important;
        }

        .equity-icon {
          color: #1976d2;
        }

        .holdings-icon {
          color: #388e3c;
        }

        .section-header h3 {
          margin: 0;
          font-size: 1.1rem;
          color: #333;
        }

        .section-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .main-value {
          text-align: center;
        }

        .main-value h2 {
          margin: 0;
          font-size: 1.8rem;
          color: #333;
        }

        .main-value p {
          margin: 0.25rem 0 0;
          color: #666;
          font-size: 0.9rem;
        }

        .sub-values {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        .sub-value {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .sub-value span:first-child {
          color: #666;
          font-size: 0.9rem;
        }

        .sub-value span:last-child {
          font-weight: 500;
          color: #333;
        }

        .profit {
          color: #28a745;
        }

        .loss {
          color: #dc3545;
        }

        .profit-percent {
          color: #28a745;
          font-weight: 600;
        }

        .loss-percent {
          color: #dc3545;
          font-weight: 600;
        }

        .highlights-section {
          background: #f5f7fa;
          border-radius: 8px;
          padding: 1.25rem;
          margin-bottom: 1rem;
        }
        .highlights-icon {
          font-size: 1.7rem;
          margin-right: 0.5rem;
        }
        .highlights-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          min-height: 32px;
        }
        .highlight-label {
          color: #666;
          font-size: 0.95rem;
        }
        .highlight-value {
          font-weight: 600;
          color: #333;
          font-size: 1.08rem;
        }
        @media (max-width: 480px) {
          .summary-container {
            padding: 1rem;
          }

          .summary-header h2 {
            font-size: 1.3rem;
          }

          .main-value h2 {
            font-size: 1.5rem;
          }

          .sub-values {
            flex-direction: column;
            gap: 0.5rem;
          }
          .highlights-content {
            gap: 0.5rem;
          }
        }
        .info-icon {
          font-size: 1rem;
          color: #888;
          margin-left: 4px;
          vertical-align: middle;
          cursor: pointer;
        }
        .abs-value {
          color: #888;
          font-size: 0.98rem;
        }
        .performer-link {
          cursor: pointer;
          text-decoration: underline dotted;
          transition: color 0.2s;
        }
        .performer-link:hover {
          color: #1976d2;
        }
        .trend-arrow {
          font-size: 1.1rem;
          font-weight: bold;
          margin-right: 2px;
        }
        .trend-arrow.up {
          color: #28a745;
        }
        .trend-arrow.down {
          color: #dc3545;
        }
        .refresh-btn {
          background: #f5f5f5;
          border: none;
          border-radius: 4px;
          color: #1976d2;
          font-size: 1.1rem;
          margin-left: auto;
          padding: 4px 10px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .refresh-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .refresh-btn:hover:not(:disabled) {
          background: #e3eafc;
        }
      `}</style>
    </div>
  );
};

export default Summary;
