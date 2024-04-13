import React from "react";
import {
  EContent,
  ESpanAnimate,
  ExperienceHeader,
  ExperienceSectionComp,
  ExperienceTimelineBox,
  ExperienceTimelineContent,
} from "./Experience.styles";

const experienceDetails = [
  {
    year: "Aug, 2020 - Present",
    cName: "Jio Platforms Ltd.", // company name
    role: "Software Development Engineer - 2",
    workDetails: [
      "Developed a multitude of user interfaces for web applications (eg., Health Feed, Health Locker, Health Patri, Awareness, etc.) utilizing React which is used by more than 100k users.",
      "Improved existing websites performance implementing optimization techniques, resulting in >75% enhancement over the legacy code. This achievement was accomplished through strategic utilization of deferring, encoding, and memoization for optimal performance gains.",
      "Spearheaded the implementation of SonarLint across existing and in-progress web applications, systematically enhancing code legibility while mitigating critical, major and minor defects, culminating in an esteemed “A” rating for security compliance.",
      "Designed and implemented the backend system of a medication reminder service, facilitating accurate and timely notifications to patients regarding dosage, timing and specific medication to be taken.",
      "Enhanced the architecture of the error handling service to optimize the scalability of the application for processing substantial data loads. Additionally, integrated a scheduler to automatically eliminate successfully processed errors from the database, resulting in cost savings exceeding 50%.",
    ],
  },
  {
    year: "May, 2019 - Jul, 2019",
    cName: "MAQ Software, Hyderabad", // company name
    role: "Software Intern",
    workDetails: [
      "Implemented measures to address accessibility challenges on web pages, fostering inclusivity for users with diverse abilities.",
    ],
  },
];

const Experience = () => {
  return (
    <ExperienceSectionComp>
      <ExperienceHeader>
        Experience
        <ESpanAnimate $timing={0} />
      </ExperienceHeader>
      <ExperienceTimelineBox>
        {experienceDetails.map((ele, idx) => {
          return (
            <ExperienceTimelineContent key={idx}>
              <EContent>
                <div className="year">
                  <i className="bx bxs-calendar"></i>
                  {ele.year}
                </div>
                <h3>{ele.cName}</h3>
                <h4>{ele.role}</h4>
                <ul>
                  {ele.workDetails.map((work, i) => {
                    return <li key={i}>{work}</li>;
                  })}
                </ul>
              </EContent>
            </ExperienceTimelineContent>
          );
        })}
        <ESpanAnimate $timing={2} />
      </ExperienceTimelineBox>
    </ExperienceSectionComp>
  );
};

export default Experience;
