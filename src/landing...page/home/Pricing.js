import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Pricing() {
    return (
        <section className="container mb-5">
            <div className="row align-items-center">
                {/* Text Column */}
                <div className="col-md-4 text-center text-md-start">
                    <h1 className="mt-5 mb-3 fs-2">Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a href="/pricing" className="d-flex align-items-center gap-2 text-decoration-none fw-bold">
                        See pricing <FaArrowRight />
                    </a> 
                </div>

                {/* Pricing Boxes */}
                <div className="col-md-6 offset-md-2 mt-5">
                    <div className="row text-center">
                        {/* Free Pricing Box */}
                        <div className="col p-4 border rounded shadow-sm bg-light d-flex flex-column justify-content-center">
                            <h1 className="mb-3 fw-bold text-primary">₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>

                        {/* ₹20 Pricing Box */}
                        <div className="col p-4 border rounded shadow-sm bg-light d-flex flex-column justify-content-center">
                            <h1 className="mb-3 fw-bold text-primary">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
