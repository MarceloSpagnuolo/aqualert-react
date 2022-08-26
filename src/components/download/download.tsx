import React from "react";
import "./download.css";
import download from "../../assets/images/download-phones.png";
import BtnGoogle from "../shared/btn-google/btn-google";
import BtnStore from "../shared/btn-store/btn-store";
import arrow from "../../assets/images/arrow-down.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Download = () => {
  return (
    <div className="download-container" id="download">
      <div className="download-content">
        <AnimationOnScroll animateIn="animated fadeInLeft" animateOnce={true}>
          <div className="download-left">
            <img src={download} alt="download" />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animated fadeInRight" animateOnce={true}>
          <div className="download-right">
            <div className="download-title">
              <span>
                Become a <strong>water drinker</strong> and join our community.
              </span>
            </div>
            <div className="download-subtitle">
              <span>Download Aqualert App</span>
              <img src={arrow} alt="arrow" />
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
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Download;
