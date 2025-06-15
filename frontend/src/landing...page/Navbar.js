import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom bg-white shadow-sm sticky-top">
            <div className="container p-2">
                {/* Logo */}
                <NavLink className="navbar-brand" to="/">
                    <img src="/media/images/logo.svg" alt="Logo" className="img-fluid" style={{ maxWidth: "135px" }} />
                </NavLink>

                {/* Navbar Toggle Button (for mobile) */}
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center gap-1">
                        {[
                            { path: "/about", label: "About" },
                            { path: "/products", label: "Products" },
                            { path: "/pricing", label: "Pricing" },
                            { path: "/support", label: "Support" }
                        ].map((item, index) => (
                            <li key={index} className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        `nav-link px-3 py-2 rounded-3 ${isActive ? 'active bg-light fw-medium' : 'text-secondary'}`
                                    }
                                    to={item.path}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="nav-item ms-2">
                            <NavLink to="/login" className="nav-link px-3 py-2">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signup" className="btn btn-primary px-4 py-2">
                                Sign up
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
