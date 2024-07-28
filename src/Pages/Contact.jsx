import React from "react";
import "../Styles/Contact.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaMailBulk,
  FaMobileAlt,
  FaHome,
  FaWhatsapp,
} from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="ContactContainer nav-link contact" id="contactSection">
      <div>
        <h1>Contact Me</h1>
        <div>
          <h3 id="contact-phone">
            <FaMobileAlt className="contactlogotop" />
            &nbsp;Contact No.&nbsp; › &nbsp;<span>7746992805</span>
          </h3>
          <h3 id="contact-email">
            <a
              href="mailto:rajkumarrajput805@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaMailBulk className="contactlogotop" />
              &nbsp;&nbsp;Email Id &nbsp; › &nbsp;
              <span>rajkumarrajput805@gmail.com</span>
            </a>
          </h3>
          <h3>
            <FaHome className="contactlogotop" />
            &nbsp;&nbsp; Address&nbsp; ›{" "}
            <span>Sarangpur(Madhya Pradesh)</span>
          </h3>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/rajkumar-rajput-68354323b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            id="contact-linkedin"
          >
            <FaLinkedinIn className="contactlogo" />
          </a>
          <a
            href="https://github.com/Rajkumar77469"
            target="_blank"
            rel="noreferrer"
            id="contact-github"
          >
            <FaGithub className="contactlogo" />
          </a>
          <a
            href="mailto:rajkumarrajput805@gmail.com"
            target="_blank"
            rel="noreferrer"
            id="contact-email"
          >
            <FaMailBulk className="contactlogo" />
          </a>
          <a
            href="https://wa.me/+917746992805"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="contactlogo" />
          </a>
        </div>
        <div>
          <p className="thank-you">Thank you for visiting my portfolio!</p>
        </div>
      </div>
    </div>
  );
};
