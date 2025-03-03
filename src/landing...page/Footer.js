import React from 'react';

function Footer() {
    return (
        <footer className="container mt-5 py-4 border-top">
            <div className="row">
                {/* Logo Section */}
                <div className="col-md-3 col-12 mb-4">
                    <img src="/media/images/logo.svg" alt="Company Logo" className="img-fluid" style={{ maxWidth: "150px" }} />
                    <p className="text-muted small">© 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.</p>
                </div>

                {/* Footer Links Sections */}
                {[
                    { title: "About Us", items: ["About", "Products", "Pricing", "Referral Programme", "Careers", "Zerodha.tech", "Open Source", "Press & Media", "Zerodha Cares (CSR)"] },
                    { title: "Support", items: ["Contact Us", "Support Portal", "Z-Connect Blog", "List of Charges", "Downloads & Resources", "Videos", "Market Overview", "How to File a Complaint?", "Status of Your Complaints"] },
                    { title: "Account", items: ["Open an Account", "Fund Transfer"] }
                ].map((section, index) => (
                    <div key={index} className="col-md-3 col-6">
                        <p className="fw-bold">{section.title}</p>
                        <ul className="list-unstyled">
                            {section.items.map((item, i) => (
                                <li key={i}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Legal and Compliance Section */}
            <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
                <small>
                    <p>
                        <strong>Zerodha Broking Ltd.</strong>: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633<br />
                        <strong>Depository Services</strong>: CDSL/NSDL through Zerodha Broking Ltd. – SEBI Reg.: IN-DP-431-2019<br />
                        <strong>Commodity Trading</strong>: Zerodha Commodities Pvt. Ltd. – SEBI Reg.: INZ000038238<br />
                    </p>
                    <address>
                        <strong>Registered Address:</strong> Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.<br />
                        For complaints, write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>.<br />
                        Please read the <a href="#">Risk Disclosure Document</a> prescribed by SEBI | ICF.
                    </address>
                    <p>
                        <strong>Attention investors:</strong><br />
                        - Brokers can accept securities as margins only via **pledge in the depository system** (since Sep 1, 2020).<br />
                        - **Update your email & phone number** with your broker.<br />
                        - Check your securities/MF/bonds via NSDL/CDSL **monthly statement**.<br />
                    </p>
                    <p>
                        "Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your broker to receive transaction updates from the exchange."
                    </p>
                </small>
            </div>

            {/* Footer Navigation Links */}
            <div className="footer-links text-center mt-4">
                <ul className="list-inline d-flex flex-wrap justify-content-center">
                    {["NSE", "BSE", "MCX", "Terms & Conditions", "Policies & Procedures", "Privacy Policy", "Disclosure", "For Investors", "Investor Charter"].map((item, index) => (
                        <li key={index} className="list-inline-item mx-2">
                            <a href="#" className="text-decoration-none text-muted">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
