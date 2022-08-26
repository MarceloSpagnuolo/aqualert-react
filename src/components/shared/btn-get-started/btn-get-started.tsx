import React from "react";
import "./btn-get-started.scss";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-arrow-right"
            viewBox="0 0 21 12"
          >
            <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
          </svg>
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
