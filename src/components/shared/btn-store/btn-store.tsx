import React from "react";
import "./btn-store.css";
import store from "../../../assets/svgs/AS.svg";

const BtnStore = () => {
  return (
    <div>
      <button type="button" className="store-button">
        <img src={store} alt="google" className="store-img" />
      </button>
    </div>
  );
};

export default BtnStore;
