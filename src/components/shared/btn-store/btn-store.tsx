import React from "react";
import "./btn-store.css";
import store from "../../../assets/images/store.png";

const BtnStore = () => {
  return (
    <div>
      <button type="button" className="store-button">
        <img src={store} alt="google" />
      </button>
    </div>
  );
};

export default BtnStore;
