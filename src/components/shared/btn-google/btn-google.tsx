import React from "react";
import "./btn-google.css";
import google from "../../../assets/images/google.png";

const BtnGoogle = () => {
  return (
    <div>
      <button type="button" className="google-button">
        <img src={google} alt="google" />
      </button>
    </div>
  );
};

export default BtnGoogle;
