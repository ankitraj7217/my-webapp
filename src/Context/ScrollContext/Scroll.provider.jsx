import React, { useContext, useEffect, useState } from "react";
import ScrollContext from "./Scroll.context";

const ScrollContextProvider = ({ children }) => {
  // is scroll end of the content
  const [scrollEnd, setScrollEnd] = useState({
    isHome: false,
    isExperience: false,
    isSkillsProjects: false,
    isEducation: false,
    isCertifications: false
  });

  useEffect(() => {
  }, [scrollEnd])

  return (
    <ScrollContext.Provider value={{ scrollEnd, setScrollEnd }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;

export const useScrollContext = () => useContext(ScrollContext);
