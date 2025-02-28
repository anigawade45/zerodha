import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
            <div className="container p-2">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="/media/images/logo.svg" alt="Logo" className="img-fluid" style={{ maxWidth: "150px" }} />
                </Link>

                {/* Navbar Toggle Button (for mobile) */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
