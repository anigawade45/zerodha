import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Education() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-md-6 col-12 text-center">
                    <img src="/media/images/education.svg" alt="Education" className="img-fluid" style={{ maxWidth: "70%" }} />
                </div>

                {/* Text Content Column */}
                <div className="col-md-6 col-12">
                    <h1 className="fs-2 mt-4 mb-3">Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world covering everything from 
                        the basics to advanced trading.
                    </p>
                    <a href="/about" className="d-block mt-3 text-decoration-none">Varsity <FaArrowRight /></a>

                    <p className="mt-4">
                        TradingQ&A, the most active trading and investment community in India for all your market-related queries.
                    </p>
                    <a href="/about" className="d-block mt-3 text-decoration-none">TradingQ&A <FaArrowRight /></a>
                </div>
            </div>
        </div>
    );
}

export default Education;
