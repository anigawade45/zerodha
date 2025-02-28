import React from 'react';

function Footer() {
    return (
        <footer className="container mt-5 py-4 border-top">
            <div className="row">
                {/* Logo Section */}
                <div className="col-md-3 col-12 mb-4">
                    <img src="/media/images/logo.svg" alt="Company Logo" className="img-fluid" style={{ maxWidth: "150px" }} />
                    <p className="text-muted small">© 2010 - 2025, Zerodha Broking Ltd.<br />
                        All rights reserved.</p>
                </div>

                {/* About Us Section */}
                <div className="col-md-3 col-6">
                    <p className="fw-bold">About Us</p>
                    <ul className="list-unstyled">
                        {["About", "Products", "Pricing", "Referral Programme", "Careers", "Zerodha.tech", "Open Source", "Press & Media", "Zerodha Cares (CSR)"].map((item, index) => (
                            <li key={index}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Support Section */}
                <div className="col-md-3 col-6">
                    <p className="fw-bold">Support</p>
                    <ul className="list-unstyled">
                        {["Contact Us", "Support Portal", "Z-Connect Blog", "List of Charges", "Downloads & Resources", "Videos", "Market Overview", "How to File a Complaint?", "Status of Your Complaints"].map((item, index) => (
                            <li key={index}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Account Section */}
                <div className="col-md-3 col-6">
                    <p className="fw-bold">Account</p>
                    <ul className="list-unstyled">
                        {["Open an Account", "Fund Transfer"].map((item, index) => (
                            <li key={index}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Legal and Compliance Section */}
            <div className="mt-5 text-small text-muted" style={{ fontSize: "14px"}}>
                <small>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 <br />
                        CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 <br />
                        Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 <br />
                        Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. <br />
                        For any complaints, please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>. <br />
                        Please read the <a href="#">Risk Disclosure Document</a> as prescribed by SEBI | ICF.
                    </p>
                    <p>
                        Investments in securities market are subject to market risks; read all related documents carefully before investing.
                    </p>
                    <p>
                        <strong>Attention investors:</strong> <br />
                        1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. <br />
                        2) Update your e-mail and phone number with your stock broker/depository participant. <br />
                        3) Check your securities/MF/bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        "Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day."
                    </p>
                </small>
            </div>

            {/* Footer Navigation Links */}
            <div className="footer-graveyard-links text-center mt-4">
                <ul className="list-inline">
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
