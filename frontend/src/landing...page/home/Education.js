import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    const resources = [
        {
            title: "Varsity",
            description: "The largest online stock market education book in the world, covering everything from the basics to advanced trading.",
            icon: "book",
            stats: "1M+ readers",
            link: "/varsity"
        },
        {
            title: "TradingQ&A",
            description: "The most active trading and investment community in India for all your market-related queries.",
            icon: "chat-dots",
            stats: "500K+ answers",
            link: "/tradingqna"
        }
    ];

    return (
        <section className="education-section py-5">
            <div className="container">
                <div className="row align-items-center gy-5">
                    {/* Image Column */}
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <div className="education-decoration"></div>
                            <img 
                                src="/media/images/education.svg" 
                                alt="Market education resources" 
                                className="img-fluid education-image" 
                            />
                            
                            {/* Stats Card */}
                            <div className="education-card bg-white p-3 rounded-4 shadow-sm position-absolute">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="education-icon bg-primary bg-opacity-10 rounded-circle p-3">
                                        <i className="bi bi-mortarboard text-primary fs-4"></i>
                                    </div>
                                    <div>
                                        <h4 className="mb-0 fw-bold">2M+</h4>
                                        <p className="mb-0 text-secondary">Active Learners</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-lg-6">
                        <div className="ps-lg-4">
                            <h6 className="text-primary fw-semibold mb-3">EDUCATION</h6>
                            <h2 className="display-5 fw-bold mb-4">Free and open market education</h2>
                            <p className="lead text-secondary mb-5">
                                Learn from India's largest collection of stock market education resources, 
                                created by experienced professionals.
                            </p>

                            <div className="education-resources">
                                {resources.map((resource, index) => (
                                    <div key={index} className="education-resource-card p-4 rounded-4 mb-4">
                                        <div className="d-flex gap-4">
                                            <div className="resource-icon bg-primary bg-opacity-10 rounded-circle p-3 align-self-start">
                                                <i className={`bi bi-${resource.icon} text-primary fs-4`}></i>
                                            </div>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h3 className="h5 fw-bold mb-0">{resource.title}</h3>
                                                    <span className="badge bg-primary bg-opacity-10 text-primary">
                                                        {resource.stats}
                                                    </span>
                                                </div>
                                                <p className="text-secondary mb-3">{resource.description}</p>
                                                <Link 
                                                    to={resource.link} 
                                                    className="btn btn-outline-primary d-inline-flex align-items-center gap-2"
                                                >
                                                    Start Learning
                                                    <i className="bi bi-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
