import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        setScroll(window.scrollY);
      };
    }
  }, [setScroll]);

  return (
    <div
      className={scroll < 5 ? "navbar-container" : "navbar-container bgcolor"}
      id="navbar"
    >
      <div className="navbar-content">
        <div className="logo">
          <span>aqualert</span>
        </div>
        <div className="menu">
          <a href="/" className="navbar-link">
            About
          </a>
          <a href="/" className="navbar-link">
            Donwload
          </a>
          <a href="/" className="navbar-link">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
