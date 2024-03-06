import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="main-container-footer">
      <p className="footer-text">
        Aqualert ™ - All rights reserved {new Date().getUTCFullYear()} -
      </p>
      <a href="/privacy-policy" className="footer-text-privacy">
        Privacy Policy
      </a>
    </div>
  );
};
