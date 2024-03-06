import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);

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
        <div className={show ? "menu x" : "menu"}>
          <a href="#about" className="navbar-link scroll">
            About
          </a>
          <a href="#download" className="navbar-link scroll">
            Download
          </a>
          <a href="#contact" className="navbar-link scroll">
            Contact us
          </a>
          <a href="" className="navbar-link scroll">
            Privacy policy
          </a>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <div className={show ? "line1 z" : "line1"}></div>
          <div className={show ? "line2 b" : "line2"}></div>
          <div className={show ? "line3 c" : "line3"}></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
