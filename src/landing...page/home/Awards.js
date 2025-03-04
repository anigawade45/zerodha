import React from 'react';

function Awards() {
    return (
        <section className="mt-5 container">
            <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-md-6 col-12 p-5 text-md-start text-center">
                    <img 
                        src="/media/images/largestBroker.svg" 
                        alt="Illustration of the largest stock broker in India" 
                        className="img-fluid" 
                    />
                </div>

                {/* Text Content Column */}
                <div className="col-md-6 col-12 p-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-4">
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily 
                        by trading and investing in stocks, bonds, commodities, and currencies.
                    </p>

                    <div className="row">
                        {/* Left List */}
                        <div className="col-6">
                            <ul className="list-unstyled ps-3">
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        {/* Right List */}
                        <div className="col-6">
                            <ul className="list-unstyled ps-3">
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. securities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Press Logos */}
                    <div className="text-center mt-4">
                        <img 
                            src="/media/images/pressLogos.png" 
                            alt="Press logos featuring Zerodha" 
                            className="img-fluid" 
                            style={{ maxWidth: '80%' }} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Awards;
