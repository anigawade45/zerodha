import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  return (
    <div className="careers-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Join Our Team</h1>
          <p className="lead mb-5">
            We're always looking for talented individuals who are passionate about technology and finance.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3">Why Join Zerodha?</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      Work on challenging technical problems
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      Competitive compensation
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      Flexible work environment
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      Learning and growth opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3">Open Positions</h3>
                  <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Software Engineer</h5>
                        <small>Bangalore</small>
                      </div>
                      <p className="mb-1">Full-stack development role</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Product Manager</h5>
                        <small>Bangalore</small>
                      </div>
                      <p className="mb-1">Product strategy and execution</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">UX Designer</h5>
                        <small>Bangalore</small>
                      </div>
                      <p className="mb-1">User experience and interface design</p>
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

export default Careers; 