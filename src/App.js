import "./App.css";
import Navbar from "./Components/Navbar/Navbar.component";
import GlobalStyles from "./StyledComponentsUtils/Global.styles";
import Body from "./Components/Body/Body.component";
import ScrollContextProvider from "./Context/ScrollContext/Scroll.provider";
import ThemeContextProvider from "./Context/ThemeContext/Theme.provider";

function App() {
  return (
    <ThemeContextProvider>
      <ScrollContextProvider>
        <GlobalStyles />
        <div className="App">
          <Navbar />
          <Body />
        </div>
      </ScrollContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
