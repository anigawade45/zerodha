import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const footerSections = [
        {
            title: "Company",
            items: [
                { label: "About", link: "/about" },
                { label: "Products", link: "/products" },
                { label: "Pricing", link: "/pricing" },
                { label: "Careers", link: "/careers" },
                { label: "Press & Media", link: "/press" }
            ]
        },
        {
            title: "Support",
            items: [
                { label: "Help Center", link: "/support" },
                { label: "Contact Us", link: "/contact" },
                { label: "Market Overview", link: "/market" },
                { label: "Downloads", link: "/downloads" },
                { label: "Videos", link: "/videos" }
            ]
        },
        {
            title: "Resources",
            items: [
                { label: "Z-Connect Blog", link: "/blog" },
                { label: "Zerodha.tech", link: "/tech" },
                { label: "Open Source", link: "/open-source" },
                { label: "Referral Programme", link: "/referral" },
                { label: "List of Charges", link: "/charges" }
            ]
        },
        {
            title: "Account",
            items: [
                { label: "Open an Account", link: "/signup" },
                { label: "Fund Transfer", link: "/fund-transfer" },
                { label: "60 Day Challenge", link: "/challenge" }
            ]
        }
    ];

    const legalLinks = [
        "NSE", "BSE", "MCX", "Terms & Conditions", "Privacy Policy", 
        "Disclosure", "Investor Charter"
    ];

    return (
        <footer className="footer-section pt-5">
            <div className="container">
                {/* Main Footer Content */}
                <div className="row g-4">
                    {/* Logo and Social Section */}
                    <div className="col-lg-3">
                        <div className="pe-lg-4">
                            <Link to="/" className="footer-logo mb-4 d-inline-block">
                                <img 
                                    src="/media/images/logo.svg" 
                                    alt="Zerodha" 
                                    className="img-fluid" 
                                    style={{ maxWidth: "130px" }} 
                                />
                            </Link>
                            <p className="text-secondary mb-4">
                                India's largest stock broker, pioneering the discount broking industry.
                            </p>
                            <div className="social-links d-flex gap-3">
                                {["twitter", "facebook", "youtube", "instagram", "linkedin"].map((social) => (
                                    <a key={social} href={`https://${social}.com/zerodha`} 
                                       className="social-link" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                    >
                                        <i className={`bi bi-${social}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <div key={index} className="col-6 col-md-3 col-lg-2">
                            <h6 className="footer-title mb-4">{section.title}</h6>
                            <ul className="footer-links list-unstyled">
                                {section.items.map((item, i) => (
                                    <li key={i} className="mb-2">
                                        <Link to={item.link} className="footer-link">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Legal Section */}
                <div className="legal-section mt-5 pt-4">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <div className="legal-content pe-lg-4">
                                <h6 className="text-secondary mb-3">Regulatory Information</h6>
                                <p className="text-secondary small mb-3">
                                    <strong>Zerodha Broking Ltd.</strong>: Member of NSE​, BSE​ & MCX – SEBI Registration no.: INZ000031633 
                                    | <strong>CDSL/NSDL</strong>: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
                                </p>
                                <p className="text-secondary small mb-3">
                                    <strong>Registered Address</strong>: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, 
                                    J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
                                </p>
                                <div className="alert alert-light border small">
                                    <strong className="d-block mb-2">⚠️ Important:</strong>
                                    <ul className="mb-0 ps-3">
                                        <li>Update your mobile & email with your broker to receive important updates</li>
                                        <li>Check your securities/MF/bonds in your monthly demat statement</li>
                                        <li>Don't share your trading credentials with anyone</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info">
                                <h6 className="text-secondary mb-3">Contact Support</h6>
                                <div className="d-flex flex-column gap-2">
                                    <a href="mailto:support@zerodha.com" className="footer-contact-link">
                                        <i className="bi bi-envelope me-2"></i>
                                        support@zerodha.com
                                    </a>
                                    <a href="tel:+918047181888" className="footer-contact-link">
                                        <i className="bi bi-telephone me-2"></i>
                                        080 4718 1888
                                    </a>
                                    <a href="#" className="footer-contact-link">
                                        <i className="bi bi-chat-dots me-2"></i>
                                        Chat with us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom mt-4 pt-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="copyright mb-md-0">
                                © 2010 - {new Date().getFullYear()} Zerodha Broking Ltd. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <ul className="legal-links list-inline mb-0 text-md-end">
                                {legalLinks.map((link, index) => (
                                    <li key={index} className="list-inline-item">
                                        <Link to="#" className="legal-link">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
