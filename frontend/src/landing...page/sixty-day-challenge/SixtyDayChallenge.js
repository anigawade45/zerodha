import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiClock, FiInfo, FiTrendingUp } from 'react-icons/fi';

const SixtyDayChallenge = () => {
  // Example user challenge state (would be fetched from API in real app)
  const [challenge, setChallenge] = useState({
    started: true,
    startDate: '2024-05-01',
    endDate: '2024-06-30',
    daysCompleted: 40,
    totalDays: 60,
    isWinner: false,
    profit: 12000,
    segments: ['Equity', 'F&O']
  });

  return (
    <div className="sixty-day-challenge-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">60 Day Challenge</h1>
          <p className="lead mb-5">
            Prove your trading discipline! Take the 60 Day Challenge and win a certificate for profitable trading.
          </p>

          {/* Challenge Status */}
          <div className="card border-0 shadow-sm mb-5">
            <div className="card-body p-4">
              <h2 className="h5 mb-3"><FiTrendingUp className="me-2" />Your Challenge Status</h2>
              {challenge.started ? (
                <>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <div className="mb-2">Start Date: <strong>{challenge.startDate}</strong></div>
                      <div>End Date: <strong>{challenge.endDate}</strong></div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-2">Segments: <strong>{challenge.segments.join(', ')}</strong></div>
                      <div>Profit: <strong>₹{challenge.profit.toLocaleString()}</strong></div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-2">Days Completed: <strong>{challenge.daysCompleted} / {challenge.totalDays}</strong></div>
                      <div>
                        Status: {challenge.isWinner ? (
                          <span className="badge bg-success"><FiAward className="me-1" />Winner</span>
                        ) : (
                          <span className="badge bg-warning text-dark"><FiClock className="me-1" />In Progress</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${(challenge.daysCompleted / challenge.totalDays) * 100}%` }}
                      aria-valuenow={challenge.daysCompleted}
                      aria-valuemin={0}
                      aria-valuemax={challenge.totalDays}
                    ></div>
                  </div>
                  <small className="text-muted">Keep trading profitably to win the challenge!</small>
                </>
              ) : (
                <div className="alert alert-info mb-0">
                  You have not started the 60 Day Challenge yet.
                </div>
              )}
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-5">
            <h2 className="h4 mb-3"><FiInfo className="me-2" />How the Challenge Works</h2>
            <ol className="mb-3">
              <li>Start the challenge for your preferred trading segments.</li>
              <li>Trade for 60 consecutive days.</li>
              <li>Stay net profitable at the end of the challenge period.</li>
              <li>Win a digital certificate and get featured on the leaderboard!</li>
            </ol>
            <a href="#" className="btn btn-primary">Start Challenge</a>
          </div>

          {/* Rules & Rewards */}
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3"><FiCheckCircle className="me-2" />Rules</h3>
                  <ul className="mb-0">
                    <li>Challenge is available for Equity, F&O, Currency, and Commodity segments.</li>
                    <li>Only net profits at the end of 60 days are considered for winning.</li>
                    <li>No minimum turnover required.</li>
                    <li>Multiple challenges can be taken simultaneously in different segments.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3"><FiAward className="me-2" />Rewards</h3>
                  <ul className="mb-0">
                    <li>Digital certificate of achievement for winners.</li>
                    <li>Get featured on the Zerodha leaderboard.</li>
                    <li>Bragging rights and community recognition!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ & Support */}
          <div className="mb-5">
            <h2 className="h4 mb-3">Need Help?</h2>
            <p className="text-muted mb-3">
              For more details, rules, and FAQs, visit our <a href="/support">Support</a> page or contact our team.
            </p>
            <a href="/contact" className="btn btn-outline-primary">Contact Support</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SixtyDayChallenge; 