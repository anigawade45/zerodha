import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Education() {
    return (
        <section className="container mt-5">
            <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-md-6 col-12 text-center">
                    <img 
                        src="/media/images/education.svg" 
                        alt="Illustration of market education resources" 
                        className="img-fluid" 
                        style={{ maxWidth: "70%" }} 
                    />
                </div>

                {/* Text Content Column */}
                <div className="col-md-6 col-12">
                    <h1 className="fs-2 mt-4 mb-3">Free and open market education</h1>
                    <p>
                        <strong>Varsity</strong>, the largest online stock market education book in the world, 
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="/varsity" className="d-flex align-items-center gap-2 mt-3 text-decoration-none fw-bold">
                        Varsity <FaArrowRight />
                    </a>

                    <p className="mt-4">
                        <strong>TradingQ&A</strong>, the most active trading and investment community in India for all your market-related queries.
                    </p>
                    <a href="/tradingqna" className="d-flex align-items-center gap-2 mt-3 text-decoration-none fw-bold">
                        TradingQ&A <FaArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Education;
