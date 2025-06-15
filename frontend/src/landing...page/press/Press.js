import React from 'react';
import { motion } from 'framer-motion';

const Press = () => {
  const pressReleases = [
    {
      date: '2024-03-15',
      title: 'Zerodha Launches New Trading Platform',
      description: 'Introducing our next-generation trading platform with advanced features.'
    },
    {
      date: '2024-02-28',
      title: 'Zerodha Achieves 10 Million Users',
      description: 'A significant milestone in our journey to democratize trading.'
    },
    {
      date: '2024-01-15',
      title: 'New Partnership Announcement',
      description: 'Strategic partnership to enhance trading experience.'
    }
  ];

  return (
    <div className="press-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Press & Media</h1>
          <p className="lead mb-5">
            Latest news, press releases, and media coverage about Zerodha.
          </p>

          <div className="row g-4">
            {pressReleases.map((release, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <motion.div
                  className="card h-100 border-0 shadow-sm"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="card-body p-4">
                    <small className="text-muted d-block mb-2">
                      {new Date(release.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </small>
                    <h3 className="h5 mb-3">{release.title}</h3>
                    <p className="text-muted mb-3">{release.description}</p>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Read More
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <h2 className="h3 mb-4">Media Kit</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h5 mb-3">Brand Assets</h3>
                    <p className="text-muted mb-3">
                      Download our logo, brand guidelines, and other assets.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Download Assets
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h5 mb-3">Press Contact</h3>
                    <p className="text-muted mb-3">
                      For press inquiries, please contact our media team.
                    </p>
                    <a href="mailto:press@zerodha.com" className="btn btn-primary">
                      Contact Press
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h5 mb-3">Media Coverage</h3>
                    <p className="text-muted mb-3">
                      Read about Zerodha in leading publications.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Coverage
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

export default Press; 