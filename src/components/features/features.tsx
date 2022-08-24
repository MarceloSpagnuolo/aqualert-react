import React from "react";
import "./features.css";
import bell from "../../assets/images/bell.png";
import reward from "../../assets/images/rewards.png";
import chart from "../../assets/images/chart.png";
import message from "../../assets/images/messages.png";

const Features = () => {
    
    return (
        <div className="features-container">
            <div className="features-content">
                <div className="title">
                    <span>Are you having a hard time achieving</span><br />
                    <span> your </span>
                    <span>daily water intake goals?</span>
                </div>
                <div className="subtitle">
                    <span>Aqualert App helps you to improve your routine!</span>
                </div>
                <div className="frames">
                    <div className="frame-1">
                        <img src={ bell } alt="bell" />
                        <span>we send you <strong>notifications</strong> throughout the day</span>
                    </div>
                    <div className="frame-2">
                        <img src={ reward } alt="reward" />
                        <span>we bring you <strong>challenges</strong> to keep you motivated</span>
                    </div>
                    <div className="frame-3">
                        <img src={ chart } alt="chart" />
                        <span>we will <strong>record your progress</strong> so you can move on</span>
                    </div>
                    <div className="frame-4">
                        <img src={ message } alt="message" />
                        <span>we send you <strong>motivational messages</strong></span>
                    </div>  
                </div>
                <div className="features-started">
                    <span>Get started</span>
                </div>
            </div>
        </div>
    )
}

export default Features;