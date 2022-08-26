import React from "react";
import "./features.css";
import bell from "../../assets/images/bell.png";
import reward from "../../assets/images/rewards.png";
import chart from "../../assets/images/chart.png";
import message from "../../assets/images/messages.png";
import BtnGetStarted from "../shared/btn-get-started/btn-get-started";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Features = (): JSX.Element => {
  return (
    <div className="features-container" id="about">
      <div className="features-content">
        <AnimationOnScroll animateIn="animated fadeIn" animateOnce={true}>
          <div className="title">
            <span>Are you having a hard time achieving</span>
            <br />
            <span> your </span>
            <span>daily water intake goals?</span>
          </div>
          <div className="subtitle">
            <span>Aqualert App helps you to improve your routine!</span>
          </div>
        </AnimationOnScroll>
        <div className="frames">
          <AnimationOnScroll
            animateIn="animated fadeInBottom"
            delay={150}
            animateOnce={true}
          >
            <div className="frame-1">
              <img src={bell} alt="bell" />
              <span>
                we send you <strong>notifications</strong> throughout the day
              </span>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animated fadeInBottom"
            delay={300}
            animateOnce={true}
          >
            <div className="frame-2">
              <img src={reward} alt="reward" />
              <span>
                we bring you <strong>challenges</strong> to keep you motivated
              </span>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animated fadeInBottom"
            delay={450}
            animateOnce={true}
          >
            <div className="frame-3">
              <img src={chart} alt="chart" />
              <span>
                we will <strong>record your progress</strong> so you can move on
              </span>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animated fadeInBottom"
            delay={600}
            animateOnce={true}
          >
            <div className="frame-4">
              <img src={message} alt="message" />
              <span>
                we send you <strong>motivational messages</strong>
              </span>
            </div>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animateIn="animated fadeInBottom"
          delay={150}
          animateOnce={true}
        >
          <div className="features-started">
            <BtnGetStarted color="light" />
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Features;
