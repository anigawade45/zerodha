import React from 'react';

function Awards() {
    const features = [
        { title: "Futures and Options", icon: "graph-up" },
        { title: "Commodity derivatives", icon: "box" },
        { title: "Currency derivatives", icon: "currency-dollar" },
        { title: "Stocks & IPOs", icon: "bar-chart" },
        { title: "Direct mutual funds", icon: "pie-chart-fill" },
        { title: "Bonds and Govt. securities", icon: "shield" }
    ];

    return (
        <section className="awards-section py-5">
            <div className="container">
                <div className="row align-items-center gy-5">
                    {/* Image Column */}
                    <div className="col-lg-6 col-12">
                        <div className="position-relative">
                            <div className="awards-decoration"></div>
                            <img 
                                src="/media/images/largestBroker.svg" 
                                alt="Largest stock broker in India" 
                                className="img-fluid position-relative awards-image" 
                            />
                            
                            {/* Achievement Card */}
                            <div className="achievement-card bg-white p-3 rounded-4 shadow-sm">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="achievement-icon bg-primary bg-opacity-10 rounded-circle p-3">
                                        <i className="bi bi-trophy text-primary fs-4"></i>
                                    </div>
                                    <div>
                                        <h4 className="mb-0 fw-bold">15%+</h4>
                                        <p className="mb-0 text-secondary">Daily Retail Volume</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-lg-6 col-12">
                        <div className="ps-lg-4">
                            <h6 className="text-primary fw-semibold mb-3">TRUSTED BY MILLIONS</h6>
                            <h2 className="display-5 fw-bold mb-4">Largest stock broker in India</h2>
                            <p className="lead text-secondary mb-4">
                                2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily 
                                by trading and investing in:
                            </p>

                            {/* Features Grid */}
                            <div className="row g-4 mb-5">
                                {features.map((feature, index) => (
                                    <div key={index} className="col-md-6">
                                        <div className="d-flex align-items-center feature-item">
                                            <div className="feature-icon bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                                <i className={`bi bi-${feature.icon} text-primary`}></i>
                                            </div>
                                            <span>{feature.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Press Section */}
                            <div className="press-section">
                                <h6 className="text-secondary mb-3">AS FEATURED IN</h6>
                                <div className="press-logos">
                                    <img 
                                        src="/media/images/pressLogos.png" 
                                        alt="Featured in press" 
                                        className="img-fluid" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Awards;
