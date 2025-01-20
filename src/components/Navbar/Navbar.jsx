import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo/png/logo-black.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Toggles the navigation visibility
    function ToggelNavigation() {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            {/* Add a class to the navigation menu to toggle visibility */}
            <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
                <li><Link to="/about" className="navigation-link">About</Link></li>
                <li><Link to="/skills" className="navigation-link">Skills</Link></li>
                <li><Link to="/project" className="navigation-link">Projects</Link></li>
                <li><Link to="/contact" className="navigation-link">Contact</Link></li>
            </ul>

            {/* Hamburger menu */}
            <div className="hamburger" onClick={ToggelNavigation}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;
