import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <div className="logo">
                    <span>aqualert</span>
                </div>
                <div className="menu">
                    <a href="#" className="navbar-link">About</a>
                    <a href="#" className="navbar-link">Donwload</a>
                    <a href="#" className="navbar-link">Contact us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;