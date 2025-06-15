import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="min-vh-100 d-flex align-items-center bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 text-center">
                        {/* 404 Illustration */}
                        <div className="mb-4">
                            <i className="bi bi-exclamation-triangle display-1 text-warning mb-3"></i>
                        </div>
                        
                        {/* Error Message */}
                        <h1 className="display-1 fw-bold text-primary mb-3">404</h1>
                        <h2 className="h3 text-dark mb-4">Oops! Page Not Found</h2>
                        
                        {/* Description */}
                        <p className="text-secondary mb-4">
                            The page you are looking for might have been removed, 
                            had its name changed, or is temporarily unavailable.
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="d-flex justify-content-center gap-3">
                            <Link to="/" className="btn btn-primary px-4 py-2">
                                <i className="bi bi-house-door me-2"></i>
                                Back to Home
                            </Link>
                            <Link to="/contact" className="btn btn-outline-secondary px-4 py-2">
                                <i className="bi bi-envelope me-2"></i>
                                Contact Support
                            </Link>
                        </div>
                        
                        {/* Quick Links */}
                        <div className="mt-5">
                            <h6 className="text-secondary mb-3">You might want to check:</h6>
                            <div className="d-flex justify-content-center gap-4">
                                <Link to="/products" className="text-decoration-none text-primary">
                                    <i className="bi bi-grid me-1"></i>
                                    Products
                                </Link>
                                <Link to="/about" className="text-decoration-none text-primary">
                                    <i className="bi bi-info-circle me-1"></i>
                                    About Us
                                </Link>
                                <Link to="/help" className="text-decoration-none text-primary">
                                    <i className="bi bi-question-circle me-1"></i>
                                    Help Center
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
