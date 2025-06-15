import React from 'react';

const Hero = () => {
    return (
        <section className="pricing-hero py-5 bg-light">
            <div className="container">
                {/* Header Section */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h6 className="text-primary fw-semibold mb-3 animate__animated animate__fadeIn">PRICING</h6>
                        <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInUp">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="lead text-secondary mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                            No hidden charges. No gimmicks. Just straightforward pricing that puts more money in your pocket.
                        </p>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="row g-4 justify-content-center">
                    {/* Equity Delivery */}
                    <div className="col-md-4 animate__animated animate__fadeInUp">
                        <div className="card h-100 border-0 shadow-sm text-center p-4">
                            <div className="card-body">
                                <div className="mb-4">
                                    <img 
                                        src="/media/images/pricing0.svg" 
                                        alt="Equity Delivery Pricing" 
                                        className="img-fluid mb-3" 
                                        style={{ height: "80px" }}
                                    />
                        
                                </div>
                                <h2 className="display-6 fw-bold mb-0">₹0</h2>
                                <p className="text-muted mb-4">Equity Delivery</p>
                                <h3 className="h5 fw-bold mb-3">Free equity delivery</h3>
                                <p className="text-secondary mb-4">All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.</p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Zero Brokerage
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        No Hidden Charges
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Unlimited Trading
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Intraday Trading */}
                    <div className="col-md-4 animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                        <div className="card h-100 border-0 shadow-sm text-center p-4">
                            <div className="card-body">
                                <div className="mb-4">
                                    <img 
                                        src="/media/images/intradayTrades.svg" 
                                        alt="Intraday Trading" 
                                        className="img-fluid mb-3" 
                                        style={{ height: "80px" }}
                                    />
                                </div>
                                <h2 className="display-6 fw-bold mb-0">₹20</h2>
                                <p className="text-muted mb-4">Per Order</p>
                                <h3 className="h5 fw-bold mb-3">Intraday and F&O trades</h3>
                                <p className="text-secondary mb-4">Flat ₹20 or 0.03% (whichever is lower) per executed order.</p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Equity Intraday
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        F&O Trading
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Currency Trading
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Mutual Funds */}
                    <div className="col-md-4 animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                        <div className="card h-100 border-0 shadow-sm text-center p-4">
                            <div className="card-body">
                                <div className="mb-4">
                                    <img 
                                        src="/media/images/pricingMF.svg" 
                                        alt="Mutual Fund Pricing" 
                                        className="img-fluid mb-3" 
                                        style={{ height: "80px" }}
                                    />
                                </div>
                                <h2 className="display-6 fw-bold mb-0">₹0</h2>
                                <p className="text-muted mb-4">Direct Mutual Funds</p>
                                <h3 className="h5 fw-bold mb-3">Free direct MF</h3>
                                <p className="text-secondary mb-4">All direct mutual fund investments are absolutely free.</p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Zero Commission
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        No DP Charges
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Direct Plans
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
