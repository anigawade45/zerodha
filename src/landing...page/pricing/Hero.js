import React from 'react';

const Hero = () => {
    return (
        <div className="container">
            <div className="row p-3 p-md-5 mb-2 border-bottom text-center"
                style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
                <h1>Charges</h1>
                <p className="text-muted">List of all charges and taxes</p>
                <div className="row p-3 p-md-5">
                    <div className="col-md-4 text-center">
                        <img src="media/images/pricing0.svg" alt="Equity Delivery Pricing" className="img-fluid" />
                        <h2>Free equity delivery</h2>
                        <p>All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src="media/images/intradayTrades.svg" alt="Intraday Trading" className="img-fluid" />
                        <h2>Intraday and F&O trades</h2>
                        <p>Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src="media/images/pricingMF.svg" alt="Mutual Fund Pricing" className="img-fluid" />
                        <h2>Free direct MF</h2>
                        <p>All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
