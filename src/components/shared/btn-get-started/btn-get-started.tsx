import React from "react";
import "./btn-get-started.scss";
import arrow from "../../../assets/images/arrow-right-white.png";

const BtnGetStarted = (props: any): JSX.Element => {
  return (
    <div className="btn-get-started-container">
      <a href="/" className="btn">
        <span
          className={
            props.color === "dark" ? "btn__circle" : "btn__circle circle-white"
          }
        ></span>
        <span className="btn__white-circle">
          <img src={arrow} alt="arrow" width={25} height={18} color="red" />
        </span>
        <span
          className={props.color === "dark" ? "btn__text" : "btn__text light"}
        >
          Get started
        </span>
      </a>
    </div>
  );
};

export default BtnGetStarted;
