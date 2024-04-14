import React from "react";
import { NavbarComp, NavbarH1Tag, NavbarTheme } from "./Navbar.styles";
import { useThemeContext } from "../../Context/ThemeContext/Theme.provider";

const Navbar = () => {
  const { theme, setTheme } = useThemeContext();

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
      <NavbarTheme>
        <i
          className={`bx bxs-${theme.isDark ? "sun" : "moon"}`}
          onClick={() =>
            setTheme((prevTheme) => ({ ...prevTheme, isDark: !theme.isDark }))
          }
        ></i>
      </NavbarTheme>
    </NavbarComp>
  );
};

export default Navbar;
