import { ThemeProvider } from 'styled-components';
import './App.css';
import { theme } from './Data/theme';
import Navbar from './Components/Navbar/Navbar.component';
import GlobalStyles from './StyledComponentsUtils/Global.styles';
import Home from './Components/Home/Home.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
          <Navbar />
          <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
