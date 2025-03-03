import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom bg-white">
            <div className="container p-2">
                {/* Logo */}
                <NavLink className="navbar-brand" to="/">
                    <img src="/media/images/logo.svg" alt="Logo" className="img-fluid" style={{ maxWidth: "150px" }} />
                </NavLink>

                {/* Navbar Toggle Button (for mobile) */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav fs-5">
                        {[
                            { path: "/signup", label: "Signup" },
                            { path: "/about", label: "About" },
                            { path: "/products", label: "Products" },
                            { path: "/pricing", label: "Pricing" },
                            { path: "/support", label: "Support" }
                        ].map((item, index) => (
                            <li key={index} className="nav-item">
                                <NavLink className="nav-link" to={item.path} activeclassname="active">
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
