import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    const features = [
        {
            icon: "wallet2",
            title: "₹0 Account Opening",
            description: "No charges for equity delivery trades"
        },
        {
            icon: "graph-up",
            title: "₹20 Flat Fee",
            description: "Per executed order for intraday and F&O trades"
        },
        {
            icon: "shield-check",
            title: "Quick & Secure",
            description: "Open your account in minutes with Aadhaar"
        }
    ];

    return ( 
        <section className="open-account-section py-5">
            <div className="container">
                <div className="row align-items-center gy-5">
                    {/* Content Column */}
                    <div className="col-lg-6">
                        <div className="pe-lg-5">
                            <h6 className="text-primary fw-semibold mb-3">GET STARTED</h6>
                            <h2 className="display-4 fw-bold mb-4">
                                Open a Zerodha Account
                            </h2>
                            <p className="lead text-secondary mb-4">
                                Join millions of Indians who trust Zerodha for their investments. 
                                Modern platforms, zero brokerage on investments, and flat ₹20 intraday and F&O trades.
                            </p>

                            {/* Features Grid */}
                            <div className="features-grid mb-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="feature-item d-flex align-items-start gap-3">
                                        <div className="feature-icon bg-primary bg-opacity-10 rounded-3 p-3">
                                            <i className={`bi bi-${feature.icon} text-primary fs-4`}></i>
                                        </div>
                                        <div>
                                            <h3 className="h6 fw-bold mb-1">{feature.title}</h3>
                                            <p className="text-secondary mb-0">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Section */}
                            <div className="cta-section d-flex flex-column flex-sm-row align-items-center gap-3">
                                <Link 
                                    to="/signup" 
                                    className="btn btn-primary btn-lg px-4 py-3 d-flex align-items-center gap-2"
                                >
                                    Open an Account
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-clock text-success fs-4"></i>
                                    <span className="text-secondary">Takes only 10 minutes</span>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="trust-indicators mt-5 pt-4 border-top">
                                <div className="row g-4">
                                    <div className="col-sm-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="bi bi-people text-primary fs-4"></i>
                                            <div>
                                                <div className="h5 fw-bold mb-0">20L+</div>
                                                <small className="text-secondary">Active Clients</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="bi bi-bank text-primary fs-4"></i>
                                            <div>
                                                <div className="h5 fw-bold mb-0">₹15L Cr+</div>
                                                <small className="text-secondary">Daily Turnover</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="bi bi-patch-check text-primary fs-4"></i>
                                            <div>
                                                <div className="h5 fw-bold mb-0">4.5★</div>
                                                <small className="text-secondary">User Rating</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <div className="account-decoration"></div>
                            <div className="account-image-wrapper">
                                <img 
                                    src="/media/images/signup.png" 
                                    alt="Open Zerodha Account" 
                                    className="img-fluid account-image" 
                                />
                                
                                {/* Floating Card */}
                                <div className="account-card bg-white p-3 rounded-4 shadow-sm">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="account-card-icon bg-success bg-opacity-10 rounded-circle p-2">
                                            <i className="bi bi-check-circle-fill text-success fs-4"></i>
                                        </div>
                                        <div>
                                            <p className="text-success mb-0 fw-semibold">Account Ready</p>
                                            <small className="text-secondary">Start trading in minutes</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OpenAccount;
