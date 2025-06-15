import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShare2, FiUsers, FiGift, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const Referral = () => {
  const [referralCode, setReferralCode] = useState('ZERODHA123');
  const [copied, setCopied] = useState(false);

  const benefits = [
    {
      title: 'Refer & Earn',
      description: 'Earn ₹200 for each friend who opens an account using your referral code.',
      icon: <FiGift size={32} />
    },
    {
      title: 'No Limits',
      description: 'Refer as many friends as you want. No upper limit on earnings.',
      icon: <FiUsers size={32} />
    },
    {
      title: 'Instant Payout',
      description: 'Get credited to your trading account within 24 hours.',
      icon: <FiTrendingUp size={32} />
    }
  ];

  const steps = [
    {
      title: 'Get Your Code',
      description: 'Copy your unique referral code from your dashboard.'
    },
    {
      title: 'Share with Friends',
      description: 'Share your code with friends through email, WhatsApp, or social media.'
    },
    {
      title: 'Track Referrals',
      description: 'Monitor your referrals and earnings in real-time.'
    },
    {
      title: 'Earn Rewards',
      description: 'Get ₹200 for each successful referral.'
    }
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="referral-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Refer & Earn</h1>
          <p className="lead mb-5">
            Share the benefits of trading with Zerodha and earn rewards for every successful referral.
          </p>

          {/* Benefits Section */}
          <div className="benefits mb-5">
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="col-md-4">
                  <motion.div
                    className="card border-0 shadow-sm h-100"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="card-body p-4">
                      <div className="text-primary mb-3">
                        {benefit.icon}
                      </div>
                      <h3 className="h5 mb-3">{benefit.title}</h3>
                      <p className="text-muted mb-0">{benefit.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Referral Code Section */}
          <div className="referral-code mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h2 className="h3 mb-3">Your Referral Code</h2>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={referralCode}
                        readOnly
                      />
                      <button
                        className="btn btn-primary"
                        onClick={handleCopyCode}
                      >
                        {copied ? (
                          <>
                            <FiCheckCircle className="me-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <FiShare2 className="me-2" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-md-end mt-3 mt-md-0">
                      <button className="btn btn-outline-primary me-2">
                        Share on WhatsApp
                      </button>
                      <button className="btn btn-outline-primary">
                        Share on Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="how-it-works mb-5">
            <h2 className="h3 mb-4">How It Works</h2>
            <div className="row g-4">
              {steps.map((step, index) => (
                <div key={index} className="col-md-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="step-number mb-3">
                        <span className="badge bg-primary rounded-circle p-2">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="h5 mb-3">{step.title}</h3>
                      <p className="text-muted mb-0">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Referral Stats */}
          <div className="referral-stats mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h3 mb-4">Your Referral Stats</h2>
                <div className="row g-4">
                  <div className="col-md-3">
                    <div className="text-center">
                      <h3 className="h2 mb-2">0</h3>
                      <p className="text-muted mb-0">Total Referrals</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <h3 className="h2 mb-2">₹0</h3>
                      <p className="text-muted mb-0">Total Earnings</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <h3 className="h2 mb-2">0</h3>
                      <p className="text-muted mb-0">Pending Referrals</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <h3 className="h2 mb-2">0</h3>
                      <p className="text-muted mb-0">Successful Referrals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="terms">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h3 mb-4">Terms & Conditions</h2>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Referral rewards are credited only after the referred account is fully activated.
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Both referrer and referee must be active traders to qualify for rewards.
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Rewards are credited to the trading account within 24 hours of qualification.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Zerodha reserves the right to modify or terminate the referral program at any time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Referral; 