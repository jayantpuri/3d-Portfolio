import React from "react";

const Footer = () => {
  return (
    <section className="c-space mt-30 pb-3 pt-7 border-t border-black-300 flex justify-between flex-wrap gap-5">
      <div className="flex gap-3 text-white-700">
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          className="social-icon"
          href="https://github.com/jayantpuri"
          target="_blank"
        >
          <img src="/assets/github.svg" alt="github logo" />
        </a>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/jayant-puri/"
          target="_blank"
        >
          <img src="/assets/linkedin-logo.png" alt="github logo" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
