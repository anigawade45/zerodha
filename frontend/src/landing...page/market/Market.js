import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiTrendingDown, FiDollarSign, FiPercent } from 'react-icons/fi';

const Market = () => {
  const [activeTab, setActiveTab] = useState('indices');

  const marketData = {
    indices: [
      { name: 'NIFTY 50', value: '22,419.95', change: '+0.75%', trend: 'up' },
      { name: 'SENSEX', value: '73,852.94', change: '+0.82%', trend: 'up' },
      { name: 'BANK NIFTY', value: '47,852.10', change: '-0.15%', trend: 'down' },
      { name: 'NIFTY IT', value: '36,852.45', change: '+1.25%', trend: 'up' }
    ],
    topGainers: [
      { name: 'RELIANCE', price: '2,845.60', change: '+2.5%' },
      { name: 'TCS', price: '3,852.75', change: '+1.8%' },
      { name: 'HDFC BANK', price: '1,652.30', change: '+1.2%' }
    ],
    topLosers: [
      { name: 'INFY', price: '1,452.80', change: '-1.5%' },
      { name: 'WIPRO', price: '452.25', change: '-1.2%' },
      { name: 'TECHM', price: '1,152.60', change: '-0.8%' }
    ]
  };

  const renderMarketCard = (data, type) => (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h3 className="h5 mb-4">{type === 'indices' ? 'Market Indices' : type === 'gainers' ? 'Top Gainers' : 'Top Losers'}</h3>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-end">Value</th>
                <th className="text-end">Change</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td className="text-end">{item.value || item.price}</td>
                  <td className={`text-end ${item.trend === 'up' || !item.trend ? 'text-success' : 'text-danger'}`}>
                    {item.change}
                    {item.trend === 'up' ? <FiTrendingUp className="ms-1" /> : item.trend === 'down' ? <FiTrendingDown className="ms-1" /> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="market-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Market Overview</h1>
          <p className="lead mb-5">
            Real-time market data and analysis to help you make informed trading decisions.
          </p>

          {/* Market Summary Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h6 className="text-muted mb-2">Market Cap</h6>
                  <h3 className="h4 mb-0">₹3.2T</h3>
                  <small className="text-success">
                    <FiTrendingUp className="me-1" />
                    +1.2%
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h6 className="text-muted mb-2">Volume</h6>
                  <h3 className="h4 mb-0">₹45.2B</h3>
                  <small className="text-success">
                    <FiTrendingUp className="me-1" />
                    +0.8%
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h6 className="text-muted mb-2">Advances</h6>
                  <h3 className="h4 mb-0">1,245</h3>
                  <small className="text-success">
                    <FiTrendingUp className="me-1" />
                    +156
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h6 className="text-muted mb-2">Declines</h6>
                  <h3 className="h4 mb-0">852</h3>
                  <small className="text-danger">
                    <FiTrendingDown className="me-1" />
                    -45
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Market Data Tabs */}
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'indices' ? 'active' : ''}`}
                    onClick={() => setActiveTab('indices')}
                  >
                    Indices
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'gainers' ? 'active' : ''}`}
                    onClick={() => setActiveTab('gainers')}
                  >
                    Top Gainers
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'losers' ? 'active' : ''}`}
                    onClick={() => setActiveTab('losers')}
                  >
                    Top Losers
                  </button>
                </li>
              </ul>

              <div className="tab-content">
                {activeTab === 'indices' && renderMarketCard(marketData.indices, 'indices')}
                {activeTab === 'gainers' && renderMarketCard(marketData.topGainers, 'gainers')}
                {activeTab === 'losers' && renderMarketCard(marketData.topLosers, 'losers')}
              </div>
            </div>
          </div>

          {/* Market News Section */}
          <div className="mt-5">
            <h2 className="h3 mb-4">Latest Market News</h2>
            <div className="row g-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <small className="text-muted d-block mb-2">March {item}, 2024</small>
                      <h3 className="h5 mb-3">Market Update: Sensex crosses 74,000 mark</h3>
                      <p className="text-muted mb-3">
                        The benchmark indices continued their upward momentum, with the Sensex crossing the 74,000 mark for the first time.
                      </p>
                      <a href="#" className="btn btn-link p-0">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Market; 