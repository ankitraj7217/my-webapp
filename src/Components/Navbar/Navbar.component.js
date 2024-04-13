import React from "react";
import {
  NavbarAnchorTag,
  NavbarComp,
  NavbarH2Tag,
  NavbarRightDivTag,
} from "./Navbar.styles";

const Navbar = () => {
  const menuItems = [
    "Home",
    "Experience",
    "Skills",
    "Education",
    "Certifications",
  ];

  return (
    <NavbarComp>
      <NavbarH2Tag>Ankit Raj</NavbarH2Tag>
      <NavbarRightDivTag>
        {menuItems.map((item, index) => (
          <NavbarAnchorTag key={index} $index={index}>
            {item}
          </NavbarAnchorTag>
        ))}
      </NavbarRightDivTag>
    </NavbarComp>
  );
};

export default Navbar;
