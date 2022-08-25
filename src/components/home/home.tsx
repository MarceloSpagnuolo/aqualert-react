import React from "react";
import Navbar from "../navbar/navbar";
import "./home.css";
import phone from "../../assets/images/phone-home.png";
import BtnGoogle from "../shared/btn-google/btn-google";
import BtnStore from "../shared/btn-store/btn-store";
import BtnGetStarted from "../shared/btn-get-started/btn-get-started";

const Home = (): JSX.Element => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-frame">
        <div className="home-frame-content">
          <div className="home-left">
            <div>
              <h3 className="remember">Remember, calculate and record your</h3>
              <h3 className="water">water consumption</h3>
            </div>
            <div className="started">
              <BtnGetStarted color="dark" />
            </div>
            <div className="buttons">
              <BtnGoogle />
              <BtnStore />
            </div>
          </div>
          <div className="home-image-container">
            <img src={phone} alt="phone" className="home-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
