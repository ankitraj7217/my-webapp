import React from "react";
import { useScrollContext } from "../../Context/ScrollContext/Scroll.provider";
import useScrollEnd from "../../Utils/useScrollEnd";
import {
  EducationSectionComp,
  EducationHeader,
  EducationTimelineBox,
  EducationTimelineContent,
  EContent,
  ESpanAnimate,
} from "./Education.styles";

const educationDetails = [
  {
    year: "2016 - 2020",
    clgName: "Indian Institute of Technology(ISM), Dhanbad",
    degreeName: "B.Tech, Computer Science & Engineering",
    marks: "8.59 / 10 (Distinction)",
  },
  {
    year: "2013 - 2015",
    clgName: "Delhi Public School, Bokaro",
    degreeName: "12th - Central Board of Secondary Education",
    marks: "93.4%",
  },
  {
    year: "2009 - 2013",
    clgName: "St. Teresa's School, Bhagalpur",
    degreeName: "10th - ndian Certificate of Secondary Education",
    marks: "91%",
  },
];

const Education = () => {
  const { scrollEnd, setScrollEnd } = useScrollContext();

  useScrollEnd(() => {
    setScrollEnd({ ...scrollEnd, isEducation: true });
  });


  return (
    <EducationSectionComp>
      <EducationHeader>
        Education
        <ESpanAnimate $timing={0} />
      </EducationHeader>
      <EducationTimelineBox>
        {educationDetails.map((ele, idx) => {
          return (
            <EducationTimelineContent key={idx}>
              <EContent>
                <div className="year">
                  <i className="bx bxs-calendar"></i>
                  {ele.year}
                </div>
                <h3>{ele.clgName}</h3>
                <h4>{ele.degreeName}</h4>
                <h5>{ele.marks}</h5>
              </EContent>
            </EducationTimelineContent>
          );
        })}
        <ESpanAnimate $timing={2} />
      </EducationTimelineBox>
    </EducationSectionComp>
  );
};

export default Education;
