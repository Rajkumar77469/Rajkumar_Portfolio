import "../Styles/Home.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Typical from "react-typical";
import { DownloadIcon } from "@chakra-ui/icons";

const HomePage = () => {
  // const onClickhandler = () => {
  //     return window.open(
  //         "https://1drv.ms/b/s!AiSQDUviI7FkaxKlaRjkZfvl3nM?e=RKg89O",
  //         "_blank"
  //     );
  // };

  return (
    <div id="Home" className="nav-link home">
      <div className="container">
        <div>
          <div className="description">
            <div className="profile-details">
              <div className="colz">
                <div className="colz-icon">
                <a
                    href="https://www.linkedin.com/in/rajkumar-rajput-68354323b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    alt="linked in"
                    rel="noreferrer"
                  >
                    <i className="">
                      <FaLinkedinIn className="icon-ease-out" />
                    </i>
                  </a>
                  <a
                    href="https://github.com/Rajkumar77469"
                    target="_blank"
                    alt="github"
                    rel="noreferrer"
                  >
                    <i className="">
                      <FaGithub className="icon-ease-out" />
                    </i>
                  </a>
                </div>
              </div>

              <div className="profile-details-role">
              <h6>
                  Hello, I'm
                  <span className="highlighted-text">
                    &nbsp;{" Rajkumar Rajput "}
                  </span>
                </h6>
                <span className="primary-text">
                  <>
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Full Stack Developer",
                        3000,
                        "Mern Stack Developer",
                        3000,
                        "c++ java Html Css Developer",
                        3000,
                        "Sql NoSql Developer",
                        3000,
                      ]}
                    />
                  </>
                </span>
                {/* <span className="profile-tag-line">
                                    I am a MERN-Stack (MongoDB, Express, React, Node), I have completed Full Stack Web Development at Masai School Bangaluru, KARNATAKA
                                </span> */}
              </div>

              <div className="buttonBackground">
                <a href="#contactSection">
                  <button className="btn primary-btn"> Hire Me </button>
                </a>
                <a
                  target="_blank"
                  alt="Resume"
                  href="/download/Rajkumar_Rajput_MCA.pdf"
                  download={true}
                  // onClick={onClickhandler}
                  id="resume-link-1"
                  rel="noreferrer"
                >
                  <button className="btn highlighted-btn" id="resume-button-1">
                    Get Resume
                    <DownloadIcon />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="imagebox">
            <div className="profile-picture">
              <div className="profile-picture-background">
                <img
                  src="/Image/rajkumar.jpeg"
                  className="home-img"
                  alt="Rajkumar-rajput"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr color="black" id="aboutMePageSection" />
    </div>
  );
};

export default HomePage;
