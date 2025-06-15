import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Funds.css";
import Tooltip from "@mui/material/Tooltip";
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    fetchFunds();
  }, []);

  const fetchFunds = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(`${API_URL}/funds`, { withCredentials: true });
      setFunds(response.data);
    } catch (err) {
      setError("Unable to load your funds data. Please try again later.");
      console.error("Fetch funds error:", err);
    } finally {
      setLoading(false);
    }
  };

  const validateAmount = (value) => {
    if (!value) {
      return "Amount is required";
    }
    if (isNaN(value) || value <= 0) {
      return "Please enter a valid amount greater than 0";
    }
    if (value > 1000000) {
      return "Amount cannot exceed ₹10,00,000";
    }
    return "";
  };

  const handleAddFunds = async () => {
    const validationError = validateAmount(amount);
    if (validationError) {
      setValidationError(validationError);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/funds/add`,
        { amount: Number(amount) },
        { withCredentials: true }
      );
      setFunds(response.data);
      setShowAddModal(false);
      setAmount("");
      setValidationError("");
      toast.success(`Successfully added ₹${Number(amount).toLocaleString()} to your account`);
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Failed to add funds. Please try again.";
      setValidationError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleWithdrawFunds = async () => {
    const validationError = validateAmount(amount);
    if (validationError) {
      setValidationError(validationError);
      return;
    }

    if (Number(amount) > funds.availableCash) {
      setValidationError(`Insufficient funds. Available balance: ₹${funds.availableCash.toLocaleString()}`);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/funds/withdraw`,
        { amount: Number(amount) },
        { withCredentials: true }
      );
      setFunds(response.data);
      setShowWithdrawModal(false);
      setAmount("");
      setValidationError("");
      toast.success(`Successfully withdrawn ₹${Number(amount).toLocaleString()} from your account`);
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Failed to withdraw funds. Please try again.";
      setValidationError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !funds) {
    return (
      <div className="funds-loading">
        <div className="spinner" />
        <p className="loading-text">Loading your funds data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="funds-error">
        <p>{error}</p>
        <button className="btn btn-blue" onClick={fetchFunds}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="funds">
        <div className="funds-header">
          <p className="funds-header-text">Instant, zero-cost fund transfers with UPI</p>
          <div className="funds-header-actions">
            <button className="btn btn-green" onClick={() => setShowAddModal(true)}>
              <span>+</span> Add funds
            </button>
            <button className="btn btn-blue" onClick={() => setShowWithdrawModal(true)}>
              <span>↓</span> Withdraw
            </button>
          </div>
        </div>
      </div>

      <div className="funds-row">
        <div className="funds-col">
          <div className="funds-section-title">
            <h3>Equity</h3>
          </div>
          <div className="funds-table">
            {[
              {
                label: "Available margin",
                value: funds?.availableMargin,
                key: "availableMargin",
                tooltip: "The total margin available for trading, including cash and collateral.",
                highlight: true
              },
              {
                label: "Used margin",
                value: funds?.usedMargin,
                key: "usedMargin",
                tooltip: "The margin currently used for open positions.",
                color: "gray"
              },
              {
                label: "Available cash",
                value: funds?.availableCash,
                key: "availableCash",
                tooltip: "The cash available for withdrawal or trading.",
                highlight: true
              },
              { divider: true },
              {
                label: "Opening Balance",
                value: funds?.openingBalance,
                key: "openingBalance",
                tooltip: "The balance at the start of the day."
              },
              {
                label: "Payin",
                value: funds?.payin,
                key: "payin",
                tooltip: "Funds added to your account today.",
                color: "green"
              },
              {
                label: "SPAN",
                value: funds?.span,
                key: "span",
                tooltip: "The minimum margin required as per the exchange."
              },
              {
                label: "Delivery margin",
                value: funds?.deliveryMargin,
                key: "deliveryMargin",
                tooltip: "Margin blocked for delivery trades."
              },
              {
                label: "Exposure",
                value: funds?.exposure,
                key: "exposure",
                tooltip: "Additional margin blocked for exposure."
              },
              {
                label: "Options premium",
                value: funds?.optionsPremium,
                key: "optionsPremium",
                tooltip: "Premium received/paid for options trades."
              },
              { divider: true },
              {
                label: "Collateral (Liquid funds)",
                value: funds?.collateralLiquidFunds,
                key: "collateralLiquidFunds",
                tooltip: "Collateral margin from liquid funds."
              },
              {
                label: "Collateral (Equity)",
                value: funds?.collateralEquity,
                key: "collateralEquity",
                tooltip: "Collateral margin from pledged equity shares."
              },
              {
                label: "Total Collateral",
                value: funds?.totalCollateral,
                key: "totalCollateral",
                tooltip: "Total collateral margin available."
              }
            ].map((item, idx) =>
              item.divider ? (
                <hr className="funds-divider" key={"divider-" + idx} />
              ) : (
                <div className="funds-data" key={item.key}>
                  <Tooltip title={item.tooltip} arrow placement="right">
                    <p className="funds-label">{item.label}</p>
                  </Tooltip>
                  <p
                    className={
                      "imp " +
                      (item.highlight
                        ? "highlight-value"
                        : item.color === "green"
                        ? "profit"
                        : item.color === "gray"
                        ? "gray-value"
                        : "")
                    }
                  >
                    ₹{(item.value ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="funds-col">
          <div className="funds-commodity">
            <p>You don't have a commodity account</p>
            <button className="btn btn-blue">Open Account</button>
          </div>
        </div>
      </div>

      {/* Add Funds Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Add Funds</h3>
            <div className="modal-row">
              <label>Amount (₹):</label>
              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setValidationError(validateAmount(e.target.value));
                }}
                placeholder="Enter amount"
                className={validationError ? "input-error" : ""}
              />
            </div>
            {validationError && (
              <div className="modal-error">
                <span>⚠</span> {validationError}
              </div>
            )}
            <div className="modal-actions">
              <button 
                className="modal-btn cancel" 
                onClick={() => {
                  setShowAddModal(false);
                  setAmount("");
                  setValidationError("");
                }}
                disabled={loading}
              >
                Cancel
              </button>
              <button 
                className="modal-btn" 
                onClick={handleAddFunds}
                disabled={loading || !!validationError}
              >
                {loading ? 'Adding...' : 'Add Funds'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Funds Modal */}
      {showWithdrawModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Withdraw Funds</h3>
            <div className="modal-row">
              <label>Amount (₹):</label>
              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setValidationError(validateAmount(e.target.value));
                }}
                placeholder="Enter amount"
                className={validationError ? "input-error" : ""}
              />
            </div>
            {validationError && (
              <div className="modal-error">
                <span>⚠</span> {validationError}
              </div>
            )}
            <div className="modal-actions">
              <button 
                className="modal-btn cancel" 
                onClick={() => {
                  setShowWithdrawModal(false);
                  setAmount("");
                  setValidationError("");
                }}
                disabled={loading}
              >
                Cancel
              </button>
              <button 
                className="modal-btn" 
                onClick={handleWithdrawFunds}
                disabled={loading || !!validationError}
              >
                {loading ? 'Withdrawing...' : 'Withdraw'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Funds;
