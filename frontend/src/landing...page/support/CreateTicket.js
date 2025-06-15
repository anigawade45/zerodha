import React from 'react';
import { Link } from 'react-router-dom';

const CreateTicket = () => {
    const topics = [
        {
            icon: "person-plus",
            title: "Account Opening",
            description: "Get help with opening your trading account",
            items: ["Getting started", "Online account opening", "Offline process", "Charges", "Company accounts", "Partnership and HUF", "NRI accounts"],
            color: "primary"
        },
        {
            icon: "person-gear",
            title: "Your Zerodha Account",
            description: "Manage your account settings and details",
            items: ["Login credentials", "Profile management", "Segment activation", "CMR & DP ID", "Nomination", "Share transfer"],
            color: "success"
        },
        {
            icon: "graph-up",
            title: "Trading and Markets",
            description: "Help with trading and platform features",
            items: ["Trading FAQs", "Kite platform", "Margins", "Order types", "Corporate actions", "Advanced features"],
            color: "info"
        },
        {
            icon: "wallet2",
            title: "Funds",
            description: "Manage your funds and bank accounts",
            items: ["Fund withdrawal", "Adding funds", "Bank accounts", "eMandates"],
            color: "warning"
        },
        {
            icon: "grid",
            title: "Console",
            description: "Help with your Zerodha Console",
            items: ["IPO applications", "Portfolio tracking", "Funds statement", "Profile settings", "Reports", "Referrals"],
            color: "danger"
        },
        {
            icon: "coin",
            title: "Coin",
            description: "Help with mutual funds investments",
            items: ["Understanding MFs", "Coin app", "Coin web", "Reports", "NPS"],
            color: "secondary"
        }
    ];

    return (
        <section className="create-ticket-section py-5">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h6 className="text-primary fw-semibold mb-3 animate__animated animate__fadeIn">CREATE TICKET</h6>
                    <h2 className="display-6 fw-bold mb-4 animate__animated animate__fadeInUp">
                        Select a Topic for Your Support Ticket
                    </h2>
                    <p className="lead text-secondary col-lg-8 mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                        Choose the most relevant category to help us route your query to the right team.
                    </p>
                </div>

                {/* Topics Grid */}
                <div className="row g-4">
                    {topics.map((topic, index) => (
                        <div key={index} className="col-md-6 col-lg-4 animate__animated animate__fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                            <div className="card h-100 border-0 shadow-sm hover-lift">
                                <div className="card-body p-4">
                                    {/* Topic Header */}
                                    <div className="d-flex align-items-center mb-4">
                                        <div className={`icon-box bg-${topic.color} bg-opacity-10 rounded-3 p-3 me-3`}>
                                            <i className={`bi bi-${topic.icon} text-${topic.color} fs-4`}></i>
                                        </div>
                                        <div>
                                            <h3 className="h5 fw-bold mb-1">{topic.title}</h3>
                                            <p className="text-secondary small mb-0">{topic.description}</p>
                                        </div>
                                    </div>

                                    {/* Topic Items */}
                                    <div className="topic-items">
                                        {topic.items.map((item, i) => (
                                            <Link 
                                                key={i} 
                                                to="#" 
                                                className="d-flex align-items-center p-2 rounded-2 text-decoration-none mb-2 topic-item"
                                            >
                                                <i className="bi bi-chevron-right text-primary me-2"></i>
                                                <span className="text-body">{item}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Help Section */}
                <div className="text-center mt-5 pt-4 animate__animated animate__fadeInUp animate__delay-1s">
                    <p className="text-secondary mb-0">
                        Can't find what you're looking for? 
                        <Link to="/contact" className="text-primary ms-2">Contact our support team</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CreateTicket;
