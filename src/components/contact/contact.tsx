import React, { useState } from "react";
import "./contact.css";
import email from "../../assets/images/email.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import check from "../../assets/images/check.png";

const Contact = (): JSX.Element => {
  const [show, setShow] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault(e);
    setShow(!show);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-left">
          <div className="contact-title">
            <span>Do you have any questions?</span>
            <br />
            <span>Contact us!</span>
          </div>
          <div className="contact-subtitle">
            <span>We would love to help you</span>
          </div>
          <div className="contact-email">
            <img src={email} alt="email" />
            <span>aqualertemail@aqualert.com</span>
          </div>
          <div className="contact-social">
            <div className="social-legend">
              <span>Follow us!</span>
            </div>
            <div className="contact-buttons">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
        <div className={show ? "contact-right" : "contact-right none"}>
          <form
            action=""
            className="contact-form"
            onSubmit={e => handleSubmit(e)}
          >
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" rows={9} placeholder="Message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
        <div
          className={
            show ? "contact-right-confirm none" : "contact-right-confirm"
          }
        >
          <div className="check">
            <img src={check} alt="check" />
          </div>
          <div className="message-1">
            <span>Thanks! Your message has been sent.</span>
          </div>
          <div className="message-2">
            <span>We will contact you shortly.</span>
          </div>
          <div className="message-3">
            <span>Send another message</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
