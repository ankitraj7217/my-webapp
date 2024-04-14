import React from "react";
import Home from "../Home/Home.component";
import Skills from "../Skills/Skills.component";
import Projects from "../Projects/Projects.component";
import Experience from "../Experience/Experience.component";
import Education from "../Education/Education.component";
import Certifications from "../Certifications/Certifications.component";
import Achievements from "../Achievements/Achievements.component";

import { BodyComponent } from "./Body.styles";
import { useScrollContext } from "../../Context/ScrollContext/Scroll.provider";

const Body = () => {
  const { scrollEnd } = useScrollContext();

  return (
    <BodyComponent>
      <Home />
      {scrollEnd.isHome && <Experience />}
      {scrollEnd.isExperience && (
        <>
          <Skills />
          <Projects />
        </>
      )}
      {scrollEnd.isSkillsProjects && <Education />}
      {scrollEnd.isEducation && <Certifications />}
      {scrollEnd.isCertifications && <Achievements />}
    </BodyComponent>
  );
};

export default Body;
