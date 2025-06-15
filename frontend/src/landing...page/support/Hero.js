import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    const quickLinks = [
        { text: "Track account opening", icon: "person-check" },
        { text: "Track segment activation", icon: "toggles" },
        { text: "Intraday margins", icon: "graph-up" },
        { text: "Kite user manual", icon: "book" }
    ];

    const featuredArticles = [
        {
            title: "Current Takeovers and Delisting - January 2024",
            icon: "building",
            tag: "Latest"
        },
        {
            title: "Latest Intraday leverages - MIS & CO",
            icon: "graph-up-arrow",
            tag: "Updated"
        },
        {
            title: "Understanding F&O margins and leverage",
            icon: "calculator",
            tag: "Popular"
        }
    ];

    return (
        <section className="support-hero py-5 bg-primary bg-gradient text-white">
            {/* Top Bar */}
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div className="d-flex align-items-center">
                        <i className="bi bi-headset fs-2 me-3"></i>
                        <div>
                            <h4 className="mb-0 fw-bold">Support Portal</h4>
                            <p className="mb-0 text-white-50">Get help with your Zerodha account</p>
                        </div>
                    </div>
                    <Link to="/tickets" className="btn btn-outline-light d-flex align-items-center">
                        <i className="bi bi-ticket-detailed me-2"></i>
                        Track Tickets
                    </Link>
                </div>

                <div className="row g-4">
                    {/* Search Section */}
                    <div className="col-lg-7 animate__animated animate__fadeInLeft">
                        <div className="pe-lg-5">
                            <h1 className="display-6 fw-bold mb-4">
                                How can we help you today?
                            </h1>
                            <div className="search-box mb-4">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text bg-white border-end-0">
                                        <i className="bi bi-search text-primary"></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        className="form-control border-start-0 ps-0" 
                                        placeholder="Search for help articles..." 
                                        aria-label="Search Support Articles" 
                                    />
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="quick-links">
                                <h6 className="text-white-50 mb-3">Popular Topics</h6>
                                <div className="row g-3">
                                    {quickLinks.map((link, index) => (
                                        <div key={index} className="col-md-6">
                                            <Link 
                                                to="#" 
                                                className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3 text-white text-decoration-none hover-lift"
                                            >
                                                <i className={`bi bi-${link.icon} me-3`}></i>
                                                {link.text}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Articles */}
                    <div className="col-lg-5 animate__animated animate__fadeInRight">
                        <div className="featured-articles bg-white bg-opacity-10 p-4 rounded-4">
                            <h5 className="mb-4">
                                <i className="bi bi-star-fill me-2 text-warning"></i>
                                Featured Articles
                            </h5>
                            <div className="d-flex flex-column gap-3">
                                {featuredArticles.map((article, index) => (
                                    <Link 
                                        key={index}
                                        to="#" 
                                        className="d-flex align-items-start p-3 bg-white bg-opacity-10 rounded-3 text-white text-decoration-none hover-lift"
                                    >
                                        <i className={`bi bi-${article.icon} fs-4 me-3`}></i>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">{article.title}</h6>
                                            <span className="badge bg-primary bg-opacity-25 text-white">
                                                {article.tag}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
