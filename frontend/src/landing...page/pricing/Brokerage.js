import React from 'react';

const Brokerage = () => {
    return (
        <section className="brokerage-section py-5">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h6 className="text-primary fw-semibold mb-3 animate__animated animate__fadeIn">DETAILED CHARGES</h6>
                    <h2 className="display-6 fw-bold mb-4 animate__animated animate__fadeInUp">Charges Explained</h2>
                    <p className="lead text-secondary col-lg-8 mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                        A comprehensive breakdown of all charges and fees associated with trading on our platform.
                    </p>
                </div>

                {/* Charges Content */}
                <div className="row g-4">
                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <h3 className="h5 fw-bold mb-4">Trading & Transaction Charges</h3>
                                
                                {/* STT Section */}
                                <div className="mb-4">
                                    <h6 className="text-primary mb-3">Securities/Commodities transaction tax</h6>
                                    <p className="text-secondary mb-2">
                                        Tax by the government when transacting on the exchanges. Charged on both buy and sell sides for equity delivery, and only on selling side for intraday or F&O.
                                    </p>
                                    <div className="alert alert-light border">
                                        <i className="bi bi-info-circle-fill text-primary me-2"></i>
                                        STT/CTT can be higher than our brokerage charges. Keep track of these costs.
                                    </div>
                                </div>

                                {/* Transaction Charges */}
                                <div className="mb-4">
                                    <h6 className="text-primary mb-3">Transaction/Turnover Charges</h6>
                                    <p className="text-secondary mb-3">
                                        Charged by exchanges (NSE, BSE, MCX) on transaction value.
                                    </p>
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item bg-light rounded mb-2">
                                            <small className="d-block fw-semibold">Group XC, XD, XT, Z, ZP</small>
                                            <span className="text-secondary">₹10,000 per crore</span>
                                        </div>
                                        <div className="list-group-item bg-light rounded mb-2">
                                            <small className="d-block fw-semibold">Group A, B (Non-exclusive)</small>
                                            <span className="text-secondary">₹375 per crore</span>
                                        </div>
                                        <div className="list-group-item bg-light rounded">
                                            <small className="d-block fw-semibold">Group M, MT, TS, MS</small>
                                            <span className="text-secondary">₹275 per crore</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Other Trading Charges */}
                                <div className="mb-4">
                                    <h6 className="text-primary mb-3">Other Trading Charges</h6>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <i className="bi bi-dot text-primary"></i>
                                            <strong>Call & Trade:</strong> ₹50 per order for dealer-assisted trades
                                        </li>
                                        <li className="mb-3">
                                            <i className="bi bi-dot text-primary"></i>
                                            <strong>Stamp Duty:</strong> As per Indian Stamp Act, 1899
                                        </li>
                                        <li>
                                            <i className="bi bi-dot text-primary"></i>
                                            <strong>GST:</strong> 18% on (brokerage + charges)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInRight">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <h3 className="h5 fw-bold mb-4">Account & Service Charges</h3>

                                {/* DP Charges */}
                                <div className="mb-4">
                                    <h6 className="text-primary mb-3">DP (Depository) Charges</h6>
                                    <div className="d-flex align-items-center mb-3 p-3 bg-light rounded">
                                        <div className="text-center flex-shrink-0 me-3">
                                            <h4 className="mb-0">₹15.34</h4>
                                            <small className="text-muted">per scrip</small>
                                        </div>
                                        <div className="border-start ps-3">
                                            <ul className="list-unstyled mb-0">
                                                <li><small>CDSL Fee: ₹3.5</small></li>
                                                <li><small>Zerodha Fee: ₹9.5</small></li>
                                                <li><small>GST: ₹2.34</small></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Account Maintenance */}
                                <div className="mb-4">
                                    <h6 className="text-primary mb-3">Account Maintenance (AMC)</h6>
                                    <div className="card-group">
                                        <div className="card border-0 bg-light me-2 rounded">
                                            <div className="card-body p-3">
                                                <h6 className="card-title mb-2">BSDA Account</h6>
                                                <p className="card-text mb-0">
                                                    <strong>₹0</strong> for holdings under ₹4L
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card border-0 bg-light rounded">
                                            <div className="card-body p-3">
                                                <h6 className="card-title mb-2">Regular Account</h6>
                                                <p className="card-text mb-0">
                                                    <strong>₹300</strong>/year + GST
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Charges */}
                                <div>
                                    <h6 className="text-primary mb-3">Additional Services</h6>
                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td><small>Pledging</small></td>
                                                    <td className="text-end"><small>₹30 + GST per request</small></td>
                                                </tr>
                                                <tr>
                                                    <td><small>Off-market Transfer</small></td>
                                                    <td className="text-end"><small>₹25 per transaction</small></td>
                                                </tr>
                                                <tr>
                                                    <td><small>Physical CMR</small></td>
                                                    <td className="text-end"><small>First free, then ₹120 + GST</small></td>
                                                </tr>
                                                <tr>
                                                    <td><small>Payment Gateway</small></td>
                                                    <td className="text-end"><small>₹9 + GST (Free for UPI)</small></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-5 pt-4 border-top animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="alert alert-light border">
                        <h6 className="fw-bold mb-3">
                            <i className="bi bi-info-circle-fill text-primary me-2"></i>
                            Important Note
                        </h6>
                        <p className="text-secondary small mb-0">
                            All charges are subject to government regulations. Brokerage will not exceed SEBI-specified rates. 
                            Physical contract notes incur additional charges. Free equity delivery is for retail clients only. 
                            Special rates apply for corporate accounts and physical delivery contracts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brokerage;
