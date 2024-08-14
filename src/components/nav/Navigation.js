import React from "react";
import { Link } from 'react-router-dom';
import "./navigation.css";

/// small little navigation component with my name as the home button - might add to this later -> drop down menu
const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                Sebastian.
                </Link>
            </div>
        </nav>
    )
};

export default Navigation;

