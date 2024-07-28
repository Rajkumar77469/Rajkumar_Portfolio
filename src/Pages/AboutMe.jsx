import "../Styles/AboutMe.css";
import React from "react";
import { DownloadIcon } from "@chakra-ui/icons";

export const AboutMe = () => {
  // const onClickhandler = () => {
  //   return window.open(
  //     "https://1drv.ms/b/s!AiSQDUviI7FkaxKlaRjkZfvl3nM?e=RKg89O",
  //     "_blank"
  //   );
  // };

  return (
    <div id="aboutMe" className="nav-link about">
      <div className="aboutMeContainer">
        <h1>About Me</h1>
        <div className="aboutMeDecription">
          <div className="developerImage">
            <img src="assets/img_about_me.webp" alt="developers img" />
          </div>
          <div className="MyDescription">
            <h3 id="user-detail-name">My self  Rajkumar Rajput</h3>
            {/* <h4>Mern-Stack developer</h4> */}
            <div className="aboutmeDetails" id="user-detail-intro">
            "Hi there! I'm Rajkumar Rajput, a tech enthusiast with a strong educational background. I graduated with a BCA from Government Holkar Science College, Indore (2017-2020), followed by an MCA from the prestigious National Institute of Technology (2021-2024). My skill set includes proficiency in C++, Java, JavaScript, React.js, SQL, NoSQL, HTML, and CSS. I'm passionate about leveraging these skills to create innovative solutions and explore new opportunities in the field of technology."
            </div>
            <div className="buttons">
              <button>
                <a href="#contactPageSection">Hire me</a>
              </button>
              <button id="resume-button-2">
              <a
                  target="_blank"
                  alt="Resume"
                  href="/download/Rajkumar_Rajput_MCA.pdf"
                  download={true}
                  // onClick={onClickhandler}
                  id="resume-link-2"
                  rel="noreferrer"
                >
                  Resume
                  <DownloadIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
