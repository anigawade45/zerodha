import React, { useState, useEffect } from "react";
import { Close, TrendingUp, TrendingDown } from "@mui/icons-material";
import "./BuySellModel.css";
import { toast } from 'react-toastify';

const BuySellModal = ({ open, onClose, onConfirm, stock, action }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(stock?.price || "");
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if (open) {
      setQty(1);
      setPrice(stock?.price || "");
    }
  }, [open, stock]);

  useEffect(() => {
    setTotalValue(qty * price);
  }, [qty, price]);

  if (!open) return null;

  const handleConfirm = () => {
    if (!qty || qty <= 0) {
      toast.error("Enter a valid quantity");
      return;
    }
    if (!price || price <= 0) {
      toast.error("Enter a valid price");
      return;
    }
    onConfirm({ qty: Number(qty), price: Number(price), action });
  };

  const handleQtyChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setQty(value);
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPrice(value);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            {action === "buy" ? (
              <TrendingUp style={{ color: "#28a745", marginRight: "8px" }} />
            ) : (
              <TrendingDown style={{ color: "#dc3545", marginRight: "8px" }} />
            )}
            {action === "buy" ? "Buy" : "Sell"} {stock?.name}
          </h3>
          <button className="modal-close" onClick={onClose}>
            <Close />
          </button>
        </div>

        <div className="modal-content">
          <div className="stock-info">
            <div className="info-item">
              <span>Current Price:</span>
              <span className={stock?.isDown ? "down" : "up"}>
                ₹{stock?.price?.toLocaleString()}
              </span>
            </div>
            <div className="info-item">
              <span>Change:</span>
              <span className={stock?.isDown ? "down" : "up"}>
                {stock?.percent}
              </span>
            </div>
          </div>

          <div className="modal-form">
            <div className="form-group">
              <label>Quantity:</label>
              <div className="input-group">
                <input
                  type="text"
                  value={qty}
                  onChange={handleQtyChange}
                  placeholder="Enter quantity"
                />
                <div className="qty-buttons">
                  <button onClick={() => setQty(prev => Math.max(1, prev - 1))}>-</button>
                  <button onClick={() => setQty(prev => prev + 1)}>+</button>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Price:</label>
              <div className="input-group">
                <span className="currency">₹</span>
                <input
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div className="total-value">
              <span>Total Value:</span>
              <span className="value">₹{totalValue.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button className="modal-btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button 
            className={`modal-btn ${action}`} 
            onClick={handleConfirm}
            disabled={!qty || !price}
          >
            {action === "buy" ? "Buy" : "Sell"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySellModal; 