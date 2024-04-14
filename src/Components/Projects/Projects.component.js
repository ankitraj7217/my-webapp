import React from "react";
import { useScrollContext } from "../../Context/ScrollContext/Scroll.provider";
import useScrollEnd from "../../Utils/useScrollEnd";
import {
  ProjectIndComp,
  ProjectsDetailsEle,
  ProjectsHeaderEle,
  ProjectsSectionComp,
} from "./Projects.style";

const Projects = () => {
  const { scrollEnd, setScrollEnd } = useScrollContext();

  useScrollEnd(() => {
    setScrollEnd({ ...scrollEnd, isSkillsProjects: true });
  });


  const projects = [
    {
      name: "Khelotsu",
      details: `A versatile platform enabling user registration, login, 
        room creation, and interactive chat and video functionalities, 
        complemented by engaging games such as Chess and Tic Tac Toe.`,
      codeLink: [
        "https://github.com/ankitraj7217/khelotsu-client",
        "https://github.com/ankitraj7217/khelotsu-server",
      ],
    },
    {
      name: "SO Assistant Bot",
      details: `A dialogue chatbot which is able to provide most appropriate stackoverflow link to the 
                    programming related question and casual conversation on all non-programming related questions.`,
      codeLink: ["https://github.com/ankitraj7217/StackOverflow-Assistant-Bot"],
    },
    {
      name: "Anime Face GAN",
      details: `A sofware which generates unique anime character faces, 
        ensuring each creation is entirely original and never replicated.`,
      codeLink: ["https://github.com/ankitraj7217/AnimeFaceGAN"],
    },
  ];
  return (
    <ProjectsSectionComp>
      <ProjectsHeaderEle>Projects</ProjectsHeaderEle>
      <ProjectsDetailsEle>
        {projects.map((ele, idx) => {
          return (
            <ProjectIndComp key={idx}>
              <h3>{ele.name}</h3>
              <div className="details">{ele.details}</div>
              <div className="link">
                <span>Code Link: </span>
                {ele.codeLink.map((ele, idx) => (
                  <a
                    href={ele}
                    key={idx}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                ))}
              </div>
            </ProjectIndComp>
          );
        })}
      </ProjectsDetailsEle>
    </ProjectsSectionComp>
  );
};

export default Projects;
