import React, { useEffect, useState } from "react";
import "./navbar.css";

const NavbarPP = () => {
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
          <a href="/" className="navbar-link scroll">
            Home
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
export default NavbarPP;
