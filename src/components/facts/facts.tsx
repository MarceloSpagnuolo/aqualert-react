import React from "react";
import "./facts.css";
import down from "../../assets/images/down.png";
import trophy from "../../assets/images/trophy.png";
import medall from "../../assets/images/medall.png";
import google from "../../assets/images/facts-google.png";
import store from "../../assets/images/facts-store.png";
import arrow from "../../assets/images/arrow-right.png";

const Facts = () => {
  return (
    <div className="facts-container">
      <div className="facts-title">
        <span>
          Did you know that <strong>Aqualert</strong>
        </span>
      </div>
      <div className="table-container">
        <div className="table">
          <div className="fracts-frame-1">
            <img src={down} alt="down" />
          </div>
          <div>
            <div className="text">
              <span>
                ... has over <strong>1 million downloads worldwide</strong>,
                with a 4.5 rating on stores!
              </span>
            </div>
            <div>
              <img src={google} alt="google" />
              <img src={store} alt="store" />
            </div>
          </div>
          <div></div>
          <div></div>
          <div className="column-2">
            <div className="text">
              <span>
                We've been selected <strong>by Google</strong> to be part of an
                amazing group of new, fun and innovative fitness apps that will
                be integrated into the new Google Fit platform.
              </span>
            </div>
            <div className="post">
              <span>Read Google's post</span>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="fracts-frame-2">
            <img src={trophy} alt="trophy" />
          </div>

          <div className="fracts-frame-3">
            <img src={medall} alt="medall" />
          </div>
          <div>
            <div className="text">
              <span>
                Aqualert has been used as the lead app for the Healthy Hydration
                Challenge, which engages state legislators, constitutional
                officials, and Arkansas State Capitol staff to hydrate in
                healthy ways.
              </span>
            </div>
            <div className="post">
              <span>Read more about the contest</span>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
