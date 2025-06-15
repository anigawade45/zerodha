import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMonitor, FiSmartphone, FiTablet } from 'react-icons/fi';

const Downloads = () => {
  const platforms = [
    {
      title: 'Kite Web',
      description: 'Trade directly from your browser with our powerful web platform.',
      icon: <FiMonitor size={32} />,
      downloadUrl: '#',
      features: ['Real-time data', 'Advanced charts', 'Multiple watchlists']
    },
    {
      title: 'Kite Mobile',
      description: 'Trade on the go with our feature-rich mobile app.',
      icon: <FiSmartphone size={32} />,
      downloadUrl: '#',
      features: ['Quick order placement', 'Portfolio tracking', 'Market alerts']
    },
    {
      title: 'Kite Tablet',
      description: 'Enhanced trading experience on your tablet.',
      icon: <FiTablet size={32} />,
      downloadUrl: '#',
      features: ['Larger charts', 'Split-screen view', 'Advanced analysis']
    }
  ];

  const resources = [
    {
      title: 'User Manuals',
      items: [
        { name: 'Kite Web Guide', url: '#' },
        { name: 'Mobile App Guide', url: '#' },
        { name: 'Trading Basics', url: '#' }
      ]
    },
    {
      title: 'API Documentation',
      items: [
        { name: 'API Reference', url: '#' },
        { name: 'SDK Downloads', url: '#' },
        { name: 'Sample Code', url: '#' }
      ]
    },
    {
      title: 'Trading Tools',
      items: [
        { name: 'Margin Calculator', url: '#' },
        { name: 'Option Calculator', url: '#' },
        { name: 'Brokerage Calculator', url: '#' }
      ]
    }
  ];

  return (
    <div className="downloads-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Downloads</h1>
          <p className="lead mb-5">
            Download our trading platforms and tools to start your trading journey.
          </p>

          {/* Trading Platforms */}
          <div className="row g-4 mb-5">
            {platforms.map((platform, index) => (
              <div key={index} className="col-md-4">
                <motion.div
                  className="card border-0 shadow-sm h-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="card-body p-4">
                    <div className="text-primary mb-3">
                      {platform.icon}
                    </div>
                    <h3 className="h4 mb-3">{platform.title}</h3>
                    <p className="text-muted mb-4">{platform.description}</p>
                    <ul className="list-unstyled mb-4">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="mb-2">
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={platform.downloadUrl} className="btn btn-primary w-100">
                      <FiDownload className="me-2" />
                      Download Now
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <h2 className="h3 mb-4">Additional Resources</h2>
          <div className="row g-4">
            {resources.map((resource, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h5 mb-4">{resource.title}</h3>
                    <ul className="list-unstyled">
                      {resource.items.map((item, i) => (
                        <li key={i} className="mb-3">
                          <a href={item.url} className="text-decoration-none d-flex align-items-center">
                            <FiDownload className="text-primary me-2" />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* System Requirements */}
          <div className="mt-5">
            <h2 className="h3 mb-4">System Requirements</h2>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="h5 mb-3">Windows</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">Windows 10 or later</li>
                      <li className="mb-2">4GB RAM minimum</li>
                      <li className="mb-2">1GB free disk space</li>
                      <li>Internet connection required</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5 mb-3">Mac</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">macOS 10.13 or later</li>
                      <li className="mb-2">4GB RAM minimum</li>
                      <li className="mb-2">1GB free disk space</li>
                      <li>Internet connection required</li>
                    </ul>
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

export default Downloads; 