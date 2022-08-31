import React from "react";
import "./facts.css";
import down from "../../assets/images/down.png";
import trophy from "../../assets/images/trophy.png";
import medall from "../../assets/images/medall.png";
import google from "../../assets/images/facts-google.png";
import store from "../../assets/images/facts-store.png";
import arrow from "../../assets/images/arrow-right.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Facts = () => {
  return (
    <div className="facts-container" id="about">
      <AnimationOnScroll animateIn="animated fadeIn" animateOnce={true}>
        <div className="facts-title">
          <span>
            Did you know that <strong>Aqualert</strong>
          </span>
        </div>
      </AnimationOnScroll>
      <div className="table-container">
        <div className="table">
          <AnimationOnScroll
            animateIn="animated fadeInLeft"
            delay={150}
            animateOnce={true}
          >
            <div className="right">
              <div className="fracts-frame-1">
                <img src={down} alt="down" />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animated fadeIn"
            delay={200}
            animateOnce={true}
          >
            <div>
              <div className="text">
                <span>
                  ... has over <strong>1 million downloads worldwide</strong>,
                  with a 4.5 rating on stores!
                </span>
              </div>
              <div className="facts-buttons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.overseasolutions.waterapp.app&hl=es_AR&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={google} alt="google" />
                </a>
                <a
                  href="https://apps.apple.com/es/app/aqualert-water-tracker-daily/id952835359"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={store} alt="store" />
                </a>
              </div>
            </div>
          </AnimationOnScroll>
          <div></div>
          <div></div>
          <AnimationOnScroll
            animateIn="animated fadeIn"
            delay={200}
            animateOnce={true}
          >
            <div className="column-2">
              <div className="text">
                <span>
                  We've been selected <strong>by Google</strong> to be part of
                  an amazing group of new, fun and innovative fitness apps that
                  will be integrated into the new Google Fit platform.
                </span>
              </div>
              <div className="post">
                <a
                  href="https://developers.googleblog.com/2015/04/the-google-fit-developer-challenge.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Read Google's post</span>
                  <img src={arrow} alt="arrow" className="arrow" />
                </a>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animated fadeInRight"
            delay={150}
            animateOnce={true}
          >
            <div className="fracts-frame-2">
              <img src={trophy} alt="trophy" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animated fadeInLeft"
            delay={150}
            animateOnce={true}
          >
            <div className="right">
              <div className="fracts-frame-3">
                <img src={medall} alt="medall" />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animated fadeIn"
            delay={200}
            animateOnce={true}
          >
            <div>
              <div className="text">
                <span>
                  Aqualert has been used as the lead app for the Healthy
                  Hydration Challenge, which engages state legislators,
                  constitutional officials, and Arkansas State Capitol staff to
                  hydrate in healthy ways.
                </span>
              </div>
              <div className="post">
                <a
                  href="https://healthyactive.org/lawmakers-constitutional-officers-cutting-sugary-drinks-for-capitolgo-challenge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Read more about the contest</span>
                  <img src={arrow} alt="arrow" className="arrow" />
                </a>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Facts;
