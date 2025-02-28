import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Pricing() {
    return (
        <div className="container mb-5">
            <div className="row align-items-center">
                <div className="col-md-4 text-center text-md-start">
                    <h1 className="mt-5 mb-3 fs-2">Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a href="/about" className="text-decoration-none">See pricing <FaArrowRight /></a> 
                </div>
                <div className="col-md-6 offset-md-2 mt-5">
                    <div className="row text-center">
                        <div className="col p-4 border rounded shadow-sm">
                            <h1 className="mb-3">₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col p-4 border rounded shadow-sm">
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
