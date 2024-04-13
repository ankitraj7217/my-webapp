import React from "react";
import {
  AchievementsDetails,
  AchievementsHeader,
  AchievementsSectionComp,
} from "./Achievements.styles";

const achievementsDetails = [
  "Ranked 5038 worldwide on SPOJ coding platform among over a million users",
  "Recognized as a Spotlight Performer in Q1 2022-23 at work",
  "Graduated with distinction from university",
  "Awarded a scholar badge in higher secondary school",
  "Holds a green belt in Karate",
];

const Achievements = () => {
  return (
    <AchievementsSectionComp>
      <AchievementsHeader>Achievements</AchievementsHeader>
      <AchievementsDetails>
        <ul>
          {achievementsDetails.map((ele, idx) => (
            <li key={idx}>{ele}</li>
          ))}
        </ul>
      </AchievementsDetails>
    </AchievementsSectionComp>
  );
};

export default Achievements;
