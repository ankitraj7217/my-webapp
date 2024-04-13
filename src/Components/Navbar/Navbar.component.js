import React from "react";
import {
  NavbarComp,
  NavbarH1Tag
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
      <NavbarH1Tag>AR Code Corner</NavbarH1Tag>
      {/* <NavbarRightDivTag>
        {menuItems.map((item, index) => (
          <NavbarAnchorTag key={index} $index={index}>
            {item}
          </NavbarAnchorTag>
        ))}
      </NavbarRightDivTag> */}
    </NavbarComp>
  );
};

export default Navbar;
