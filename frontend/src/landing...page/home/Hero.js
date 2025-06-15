import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="hero-section position-relative overflow-hidden">
            {/* Background decoration */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient"></div>
            
            <div className="container position-relative">
                <div className="row min-vh-75 align-items-center py-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="text-center text-lg-start">
                            <h1 className="display-4 fw-bold mb-4 hero-title">
                                Invest in your <span className="text-primary">financial future</span>
                            </h1>
                            <p className="lead mb-4 text-secondary hero-description">
                                Join millions of investors on India's most trusted platform. 
                                Trade in stocks, derivatives, mutual funds, and more with our 
                                award-winning tools.
                            </p>
                            
                            {/* Stats Section */}
                            <div className="d-flex justify-content-center justify-content-lg-start gap-4 mb-5">
                                {[
                                    { number: "20M+", label: "Users" },
                                    { number: "₹0", label: "Brokerage" },
                                    { number: "100+", label: "Cities" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <h3 className="fw-bold mb-0 text-primary">{stat.number}</h3>
                                        <small className="text-secondary">{stat.label}</small>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                                <Link 
                                    to="/signup" 
                                    className="btn btn-primary btn-lg px-4 py-2 hero-cta"
                                >
                                    Get Started
                                </Link>
                                <Link 
                                    to="/about" 
                                    className="btn btn-outline-secondary btn-lg px-4 py-2"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="position-relative">
                            {/* Main hero image */}
                            <img 
                                src="/media/images/homeHero.png" 
                                alt="Investment platform dashboard" 
                                className="img-fluid hero-image"
                            />
                            
                            {/* Floating cards */}
                            <div className="position-absolute top-0 start-0 floating-card bg-white p-3 rounded-3 shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="bg-success rounded-circle p-2">
                                        <i className="bi bi-graph-up-arrow text-white"></i>
                                    </div>
                                    <div>
                                        <small className="text-secondary">Portfolio Value</small>
                                        <h6 className="mb-0">₹1,24,500</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="position-absolute bottom-0 end-0 floating-card bg-white p-3 rounded-3 shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="bg-primary rounded-circle p-2">
                                        <i className="bi bi-shield-check text-white"></i>
                                    </div>
                                    <div>
                                        <small className="text-secondary">Secure Trading</small>
                                        <h6 className="mb-0">SEBI Registered</h6>
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

export default Hero;
