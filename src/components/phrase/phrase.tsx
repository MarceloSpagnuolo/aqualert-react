import React from "react";
import "./phrase.css";
import a from "../../assets/images/a.png";

export const Phrase = () => {
  return (
    <div className="phrase-container">
      <div className="phrase-content">
        <img src={a} alt="a" className="a" />
        <div className="phrase-title">
          <span>Hydratation can make or break your daily performance.</span>
        </div>
        <div className="phrase-subtitle">
          <span>You have to drink water to stay on your A game</span>
        </div>
      </div>
    </div>
  );
};

export default Phrase;
