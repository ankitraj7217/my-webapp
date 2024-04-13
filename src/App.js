import { ThemeProvider } from 'styled-components';
import './App.css';
import { theme } from './Data/theme';
import Navbar from './Components/Navbar/Navbar.component';
import GlobalStyles from './StyledComponentsUtils/Global.styles';
import Home from './Components/Home/Home.component';
import Skills from './Components/Skills/Skills.component';
import Projects from './Components/Projects/Projects.component';
import Experience from './Components/Experience/Experience.component';
import Education from './Components/Education/Education.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
          <Navbar />
          <Education />
      </div>
    </ThemeProvider>
  );
}

export default App;
