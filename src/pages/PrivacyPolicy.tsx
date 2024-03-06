import React from "react";
import "./privacy-policy.css";
import Navbar from "../components/navbar/navbar";
import NavbarPP from "../components/navbar-pp/navbarpp";

export const PrivacyPolicy = () => {
  return (
    <div className="app-container" id="app">
      {/* <Navbar /> */}
      <NavbarPP />
      <div className="main-container-privacy-policy">
        <p className="title-pp">
          <b>Privacy Policy for Aqualert</b>
        </p>

        <div>
          <p className="text-pp">Effective date: March 6, 2024</p>
          <p className="text-pp">
            Thank you for using Aqualert ("us", "we", or "our"). This Privacy
            Policy is designed to help you understand how we collect, use, and
            safeguard your information when you use our mobile application and
            the choices you have associated with that information.
          </p>
        </div>

        <div>
          <p className="subtitle-pp">
            <b>Information We Collect</b>
          </p>
          <p className="text-pp">
            Aqualert does not collect any personal data from its users. We do
            not require you to provide any personally identifiable information
            to use our application.
          </p>
        </div>

        <div>
          <p className="subtitle-pp">
            <b>Ad Serving</b>
          </p>
          <p className="text-pp">
            Aqualert displays targeted advertisements to users based on various
            factors such as location, device type, and user preferences. These
            ads are served by third-party ad networks and may collect anonymous
            information about your interactions with the ads to tailor them to
            your interests. However, no personally identifiable information is
            shared with these ad networks.
          </p>
        </div>

        <div>
          <p className="subtitle-pp">
            <b>Data Retention</b>
          </p>
          <p className="text-pp">
            Since we do not collect any personal data, we do not retain any
            information about our users.
          </p>
        </div>
        <div>
          <p className="subtitle-pp">
            <b>Security</b>
          </p>
          <p className="text-pp">
            We take reasonable measures to protect the information provided by
            our users. However, please be aware that no method of transmission
            over the internet or method of electronic storage is 100% secure.
            While we strive to use commercially acceptable means to protect your
            information, we cannot guarantee its absolute security.
          </p>
        </div>

        <div>
          <p className="subtitle-pp">
            <b>Changes to This Privacy Policy</b>
          </p>
          <p className="text-pp">
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page. These changes are effective immediately after they are posted
            on this page.
          </p>
        </div>

        <div>
          <p className="subtitle-pp">
            <b>Contact Us</b>
          </p>
          <p className="text-pp">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us <a href="/#contact">here.</a> or
            directly via email at contactus@aqualertapp.com
          </p>
        </div>

        <p className="text-pp">
          By using Aqualert, you signify your acceptance of this Privacy Policy.
          If you do not agree to this Privacy Policy, please do not use our
          application.
        </p>
      </div>
    </div>
  );
};
