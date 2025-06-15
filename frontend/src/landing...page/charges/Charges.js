import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalculator, FiInfo, FiDollarSign, FiPercent } from 'react-icons/fi';

const Charges = () => {
  const [activeTab, setActiveTab] = useState('equity');

  const charges = {
    equity: [
      {
        title: 'Brokerage',
        description: 'Flat ₹20 or 0.05% (whichever is lower) per executed order',
        details: 'No brokerage on equity delivery trades'
      },
      {
        title: 'Transaction Charges',
        description: '0.053% of the transaction value',
        details: 'Charged by NSE/BSE'
      },
      {
        title: 'GST',
        description: '18% on brokerage and transaction charges',
        details: 'As per government regulations'
      },
      {
        title: 'STT',
        description: '0.05% on sell side',
        details: 'Securities Transaction Tax'
      }
    ],
    fno: [
      {
        title: 'Brokerage',
        description: '₹20 per lot or 0.05% (whichever is lower)',
        details: 'For futures and options'
      },
      {
        title: 'Transaction Charges',
        description: '0.05% of the transaction value',
        details: 'Charged by NSE'
      },
      {
        title: 'GST',
        description: '18% on brokerage and transaction charges',
        details: 'As per government regulations'
      },
      {
        title: 'STT',
        description: '0.05% on sell side',
        details: 'Securities Transaction Tax'
      }
    ],
    currency: [
      {
        title: 'Brokerage',
        description: '₹20 per lot or 0.05% (whichever is lower)',
        details: 'For currency derivatives'
      },
      {
        title: 'Transaction Charges',
        description: '0.053% of the transaction value',
        details: 'Charged by NSE'
      },
      {
        title: 'GST',
        description: '18% on brokerage and transaction charges',
        details: 'As per government regulations'
      }
    ]
  };

  const [calculatorInput, setCalculatorInput] = useState({
    type: 'equity',
    quantity: '',
    price: '',
    side: 'buy'
  });

  const calculateCharges = () => {
    const { type, quantity, price, side } = calculatorInput;
    const value = quantity * price;
    let total = 0;

    if (type === 'equity') {
      // Brokerage
      const brokerage = Math.min(20, value * 0.0005);
      // Transaction charges
      const transactionCharges = value * 0.00053;
      // GST
      const gst = (brokerage + transactionCharges) * 0.18;
      // STT (only on sell)
      const stt = side === 'sell' ? value * 0.0005 : 0;

      total = brokerage + transactionCharges + gst + stt;
    }

    return {
      brokerage: Math.min(20, value * 0.0005),
      transactionCharges: value * 0.00053,
      gst: (Math.min(20, value * 0.0005) + value * 0.00053) * 0.18,
      stt: side === 'sell' ? value * 0.0005 : 0,
      total
    };
  };

  return (
    <div className="charges-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">List of Charges</h1>
          <p className="lead mb-5">
            Transparent fee structure for all trading segments.
          </p>

          {/* Charges Tabs */}
          <div className="charges-tabs mb-5">
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'equity' ? 'active' : ''}`}
                  onClick={() => setActiveTab('equity')}
                >
                  Equity
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'fno' ? 'active' : ''}`}
                  onClick={() => setActiveTab('fno')}
                >
                  F&O
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'currency' ? 'active' : ''}`}
                  onClick={() => setActiveTab('currency')}
                >
                  Currency
                </button>
              </li>
            </ul>

            <div className="row g-4">
              {charges[activeTab].map((charge, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h3 className="h5 mb-3">{charge.title}</h3>
                      <p className="text-muted mb-2">{charge.description}</p>
                      <small className="text-muted d-block">{charge.details}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Charges Calculator */}
          <div className="calculator mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h3 mb-4">Charges Calculator</h2>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Segment</label>
                      <select
                        className="form-select"
                        value={calculatorInput.type}
                        onChange={(e) => setCalculatorInput({
                          ...calculatorInput,
                          type: e.target.value
                        })}
                      >
                        <option value="equity">Equity</option>
                        <option value="fno">F&O</option>
                        <option value="currency">Currency</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        value={calculatorInput.quantity}
                        onChange={(e) => setCalculatorInput({
                          ...calculatorInput,
                          quantity: e.target.value
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        value={calculatorInput.price}
                        onChange={(e) => setCalculatorInput({
                          ...calculatorInput,
                          price: e.target.value
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Side</label>
                      <select
                        className="form-select"
                        value={calculatorInput.side}
                        onChange={(e) => setCalculatorInput({
                          ...calculatorInput,
                          side: e.target.value
                        })}
                      >
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="results mt-4">
                  <h3 className="h5 mb-3">Breakdown of Charges</h3>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Brokerage</td>
                          <td className="text-end">₹{calculateCharges().brokerage.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td>Transaction Charges</td>
                          <td className="text-end">₹{calculateCharges().transactionCharges.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td>GST</td>
                          <td className="text-end">₹{calculateCharges().gst.toFixed(2)}</td>
                        </tr>
                        {calculatorInput.side === 'sell' && (
                          <tr>
                            <td>STT</td>
                            <td className="text-end">₹{calculateCharges().stt.toFixed(2)}</td>
                          </tr>
                        )}
                        <tr className="table-primary">
                          <td><strong>Total</strong></td>
                          <td className="text-end"><strong>₹{calculateCharges().total.toFixed(2)}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="additional-info">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h3 mb-4">Additional Information</h2>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="h5 mb-3">Important Notes</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3">
                        <i className="bi bi-info-circle-fill text-primary me-2"></i>
                        All charges are subject to change as per exchange guidelines
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-info-circle-fill text-primary me-2"></i>
                        Additional charges may apply for specific services
                      </li>
                      <li>
                        <i className="bi bi-info-circle-fill text-primary me-2"></i>
                        Please refer to the exchange website for latest updates
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5 mb-3">Need Help?</h4>
                    <p className="text-muted mb-3">
                      For any queries regarding charges or calculations, please contact our support team.
                    </p>
                    <a href="/contact" className="btn btn-primary">
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Charges; 