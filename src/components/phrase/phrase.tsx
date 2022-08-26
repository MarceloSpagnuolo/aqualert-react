import React from "react";
import "./phrase.css";
import a from "../../assets/images/a.png";
import ray from "../../assets/images/rayo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Phrase = () => {
  return (
    <div className="phrase-container">
      <div className="phrase-content">
        <img src={a} alt="a" className="a" />
        <AnimationOnScroll animateIn="animated fadeInBottom" animateOnce={true}>
          <div className="phrase-title">
            <span>Hydratation can make or break your daily performance.</span>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animated fadeInBottom"
          delay={150}
          animateOnce={true}
        >
          <div className="phrase-subtitle">
            <span>You have to drink water to stay on your A game</span>
            <img src={ray} alt="ray" />
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Phrase;
