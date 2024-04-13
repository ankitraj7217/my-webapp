import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        background-color: ${({ theme }) =>
          theme.isDark
            ? theme.colors.dark.bgColorPrimary
            : theme.colors.light.bgColorPrimary};
        color: ${({ theme }) =>
            theme.isDark
            ? theme.colors.dark.colorPrimary
            : theme.colors.light.colorPrimary};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins";
    }
    img {
        width: 100%;
        height: 100%
    }
`;

export default GlobalStyles;
