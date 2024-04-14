import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./Data/theme";
import Navbar from "./Components/Navbar/Navbar.component";
import GlobalStyles from "./StyledComponentsUtils/Global.styles";
import Body from "./Components/Body/Body.component";
import ScrollContextProvider from "./Context/ScrollContext/Scroll.provider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollContextProvider>
        <GlobalStyles />
        <div className="App">
          <Navbar />
          <Body />
        </div>
      </ScrollContextProvider>
    </ThemeProvider>
  );
}

export default App;
