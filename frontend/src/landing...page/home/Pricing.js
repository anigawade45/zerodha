import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    const pricingPlans = [
        {
            price: "₹0",
            title: "Free equity delivery",
            features: [
                "Zero account charges",
                "Direct mutual funds",
                "No hidden fees",
                "Instant account opening"
            ],
            popular: false
        },
        {
            price: "₹20",
            title: "Intraday and F&O",
            features: [
                "Flat fee per order",
                "All equity delivery benefits",
                "Advanced charts & tools",
                "Priority support"
            ],
            popular: true
        }
    ];

    return (
        <section className="pricing-section py-5">
            <div className="container">
                <div className="row align-items-center gy-5">
                    {/* Content Column */}
                    <div className="col-lg-5">
                        <div className="pe-lg-4">
                            <h6 className="text-primary fw-semibold mb-3">PRICING</h6>
                            <h2 className="display-5 fw-bold mb-4">Unbeatable pricing</h2>
                            <p className="lead text-secondary mb-4">
                                We pioneered the concept of discount broking and price transparency in India. 
                                Flat fees and no hidden charges.
                            </p>
                            <div className="d-flex gap-4 align-items-center">
                                <Link to="/pricing" className="btn btn-primary px-4 py-2 d-inline-flex align-items-center gap-2">
                                    See detailed pricing
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-shield-check text-success fs-4"></i>
                                    <span className="text-secondary">SEBI Registered</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Cards Column */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {pricingPlans.map((plan, index) => (
                                <div key={index} className="col-md-6">
                                    <div className={`pricing-card p-4 rounded-4 ${plan.popular ? 'popular' : ''}`}>
                                        {plan.popular && (
                                            <div className="popular-badge">Most Popular</div>
                                        )}
                                        <div className="text-center mb-4">
                                            <h3 className="display-4 fw-bold text-primary mb-0">{plan.price}</h3>
                                            <p className="text-secondary mb-0">per order</p>
                                        </div>
                                        <h4 className="h5 fw-bold text-center mb-4">{plan.title}</h4>
                                        <ul className="feature-list list-unstyled mb-4">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="mb-3 d-flex align-items-center gap-2">
                                                    <i className="bi bi-check-circle-fill text-success"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link 
                                            to="/signup" 
                                            className={`btn w-100 ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`}
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
