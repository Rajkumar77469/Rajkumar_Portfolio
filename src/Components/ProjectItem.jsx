import { FaGithub } from "react-icons/fa";
import "../Styles/Projects.css";
import { Box } from "@chakra-ui/react";

const ProjectItem = ({
  id,
  title,
  carousel,
  type,
  desc,
  teck_stacks,
  githubRepo,
}) => {
  return (
    <>
      <div
        className={
          id % 2 !== 0
            ? "projectItem project-card"
            : "projectItem1 project-card"
        }
      >
        <div className="projectImage">
          <h2 className="project-type project-title">
            <span>☆</span> {title}{" "}
          </h2>
          {carousel}
        </div>
        <div className="projectDetails">
          <h2>{type}</h2>
          <div className="desc project-description">
            <span>Description</span>
            <br />
            {desc}
          </div>

          <div className="techStacks">
            <div className="tech-stacks">
              <h3>Tech-Stacks & Tools used</h3>
              <div>
                {teck_stacks.map((elem, i) => {
                  return (
                    <div className="languages" key={i}>
                      {elem?.img ? (
                        <div>
                          <img src={elem.img} alt={elem.name} />
                        </div>
                      ) : (
                        <Box m={"auto"}>{elem.icon}</Box>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="btn">
              <button>
                <h3>
                  
                    <a
                      href={githubRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-link"
                    >
                      <FaGithub /> GitHub Repo
                    </a>
                
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export { ProjectItem };
