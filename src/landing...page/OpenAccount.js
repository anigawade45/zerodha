import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h1 className="text-muted fw-bold">Open a Zerodha Account</h1>
                <p className="lead text-muted">
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <Link to="/signup" className="btn btn-primary fw-bold py-2 px-4 fs-5 mt-3">
                    Sign up for free
                </Link>
            </div>
        </div>
    );
}

export default OpenAccount;
