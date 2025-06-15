import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
          <p className="lead mb-5">
            Have questions? We're here to help. Get in touch with our team.
          </p>

          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="contact-info">
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-4">Get in Touch</h3>
                    <ul className="list-unstyled">
                      <li className="d-flex mb-4">
                        <FiMail className="text-primary me-3" size={24} />
                        <div>
                          <h4 className="h6 mb-1">Email</h4>
                          <a href="mailto:support@zerodha.com" className="text-decoration-none">
                            support@zerodha.com
                          </a>
                        </div>
                      </li>
                      <li className="d-flex mb-4">
                        <FiPhone className="text-primary me-3" size={24} />
                        <div>
                          <h4 className="h6 mb-1">Phone</h4>
                          <a href="tel:+918047181888" className="text-decoration-none">
                            080 4718 1888
                          </a>
                        </div>
                      </li>
                      <li className="d-flex mb-4">
                        <FiMapPin className="text-primary me-3" size={24} />
                        <div>
                          <h4 className="h6 mb-1">Address</h4>
                          <p className="mb-0">
                            #153/154, 4th Cross, Dollars Colony,<br />
                            J.P Nagar 4th Phase,<br />
                            Bengaluru - 560078
                          </p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <FiClock className="text-primary me-3" size={24} />
                        <div>
                          <h4 className="h6 mb-1">Working Hours</h4>
                          <p className="mb-0">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 9:00 AM - 1:00 PM
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">Send us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 