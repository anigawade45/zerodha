import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    const features = [
        {
            title: "Customer-first always",
            description: "1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
            icon: "people"
        },
        {
            title: "No spam or gimmicks",
            description: "No gimmicks, spam, 'gamification', or annoying push notifications. High-quality apps that you use at your pace, the way you like.",
            icon: "shield-check"
        },
        {
            title: "The Zerodha universe",
            description: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
            icon: "grid"
        },
        {
            title: "Do better with money",
            description: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
            icon: "graph-up-arrow"
        }
    ];

    return (
        <section className="stats-section py-5">
            <div className="container">
                <div className="row align-items-center gy-5">
                    {/* Content Column */}
                    <div className="col-lg-6">
                        <div className="pe-lg-4">
                            <h6 className="text-primary fw-semibold mb-3">WHY CHOOSE US</h6>
                            <h2 className="display-5 fw-bold mb-4">Trust with confidence</h2>
                            
                            <div className="features-grid">
                                {features.map((feature, index) => (
                                    <div key={index} className="feature-card p-4 rounded-4">
                                        <div className="feature-icon-wrapper mb-3">
                                            <div className="feature-icon bg-primary bg-opacity-10 rounded-circle p-3">
                                                <i className={`bi bi-${feature.icon} text-primary fs-4`}></i>
                                            </div>
                                        </div>
                                        <h3 className="h5 fw-bold mb-3">{feature.title}</h3>
                                        <p className="text-secondary mb-0">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <div className="stats-decoration"></div>
                            <img 
                                src="/media/images/ecosystem.png" 
                                className="img-fluid stats-image" 
                                alt="Zerodha ecosystem illustration" 
                            />
                            
                            {/* Stats Cards */}
                            <div className="stats-card bg-white p-3 rounded-4 shadow-sm position-absolute">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="stats-icon bg-success bg-opacity-10 rounded-circle p-3">
                                        <i className="bi bi-graph-up text-success fs-4"></i>
                                    </div>
                                    <div>
                                        <h4 className="mb-0 fw-bold">₹4.5L Cr+</h4>
                                        <p className="mb-0 text-secondary">Equity Investments</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Links */}
                        <div className="mt-4 d-flex flex-column flex-sm-row align-items-center gap-3 justify-content-center">
                            <Link to="/products" className="btn btn-primary px-4 py-2 d-flex align-items-center gap-2">
                                Explore our products
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                            <Link to="/about" className="btn btn-outline-secondary px-4 py-2 d-flex align-items-center gap-2">
                                Learn more about us
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;
