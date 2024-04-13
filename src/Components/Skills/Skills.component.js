import React, { useEffect, useRef } from "react";

import {
  SkilledEleTag,
  SkillsHeader,
  SkillsScrollEle,
  SkillsScrollSection,
  SkillsSectionComp,
} from "./Skills.styles";

const Skills = () => {
  const scrollerInnerRef = useRef(null);

  const skills = [
    "C",
    "C++",
    "Python",
    "Java",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "styled-components",
    "SCSS",
    "React.js",
    "Node.js",
    "Express.js",
    "Socket.IO",
    "WebRTC",
    "Kafka",
    "Fast API",
    "Git",
    "Postman",
    "Docker",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ];

  return (
    <SkillsSectionComp>
      <SkillsHeader>Skills</SkillsHeader>
      <SkillsScrollSection>
        <SkillsScrollEle ref={scrollerInnerRef}>
          {[...skills, ...skills].map((ele, idx) => {
            return <SkilledEleTag key={idx}>{ele}</SkilledEleTag>;
          })}
        </SkillsScrollEle>
      </SkillsScrollSection>
    </SkillsSectionComp>
  );
};

export default Skills;
