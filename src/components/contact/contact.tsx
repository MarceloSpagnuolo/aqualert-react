import React, { useState } from "react";
import "./contact.css";
import email from "../../assets/images/email.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import check from "../../assets/images/check.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface Data {
  name: string;
  email: string;
  message: string;
}

const Contact = (): JSX.Element => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Data>({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "name") setErrors({ ...errors, name: "" });
    if (e.target.name === "email") setErrors({ ...errors, email: "" });
    if (e.target.name === "message") setErrors({ ...errors, message: "" });
    console.log(data, errors);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const regMail =
      /^([a-zA-Z0-9._+-]+)(@[a-zA-Z0-9-.]+)(\.)+(.[a-zA-Z]{2,4}){1,2}$/gm.test(
        data.email,
      );
    var _name = "";
    var _email = "";
    var _message = "";
    if (!data.name) {
      _name = "You must enter your Name";
    }
    if (!data.email) {
      _email = "You must enter a Email";
    } else if (!regMail) {
      _email = "You must enter a valid Email";
    }
    if (!data.message) {
      _message = "You must enter a Message";
    }
    setErrors({
      name: _name,
      email: _email,
      message: _message,
    });
    console.log(errors);
  };

  return (
    <AnimationOnScroll animateIn="animated fadeIn" animateOnce={true}>
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
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={e => handleChange(e)}
                className={errors.name.length > 0 ? "error" : ""}
              />
              <span className="text-error">{errors.name}</span>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={e => handleChange(e)}
                className={errors.email.length > 0 ? "error" : ""}
              />
              <span className="text-error">{errors.email}</span>
              <textarea
                name="message"
                rows={9}
                placeholder="Message"
                onChange={e => handleChange(e)}
                className={errors.message.length > 0 ? "error" : ""}
              ></textarea>
              <span className="text-error">{errors.message}</span>
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
    </AnimationOnScroll>
  );
};

export default Contact;
