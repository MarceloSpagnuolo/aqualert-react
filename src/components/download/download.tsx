import React from "react";
import "./download.css";
import download from "../../assets/images/download-phones.png";
import BtnGoogle from "../shared/btn-google/btn-google";
import BtnStore from "../shared/btn-store/btn-store";

const Download = () => {
  return (
    <div className="download-container" id="download">
      <div className="download-content">
        <div className="download-left">
          <img src={download} alt="download" />
        </div>
        <div className="download-right">
          <div className="download-title">
            <span>
              Become a <strong>water drinker</strong> and join our community.
            </span>
          </div>
          <div className="download-subtitle">
            <span>Download Aqualert App</span>
          </div>
          <div className="download-buttons">
            <div className="google">
              <BtnGoogle />
            </div>
            <div className="store">
              <BtnStore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
