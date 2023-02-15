import "@fontsource/vollkorn/400.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/source-code-pro/500.css";

import { darkModeTheme, lightModeTheme } from "./stylesheets/theme";
import About from "./components/About";
import GlobalStylesheet from "./stylesheets/GlobalStyles";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { PageType } from "./types";
import ProjectsPage from "./components/ProjectsPage";
import { ThemeProvider } from "styled-components";
import Work from "./components/Work";
import WritingPage from "./components/WritingPage";

import { useState } from "react";

function App() {
  const [page, setPage] = useState<PageType>("about");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleNavClick = (newPage: PageType) => {
    setPage(newPage);
  };

  const router = () => {
    switch (page) {
      case "about":
        return <About />;
        break;
      case "work":
        return <Work />;
        break;
      case "writing":
        return <WritingPage />;
        break;
      case "projects":
        return <ProjectsPage />;
        break;
      default:
        return <p>404: that's not a real page!</p>;
    }
  };

  return (
    <ThemeProvider theme={darkMode ? darkModeTheme : lightModeTheme}>
      <GlobalStylesheet theme={darkMode ? darkModeTheme : lightModeTheme} />
      <main className="App">
        <Header
          darkMode={darkMode}
          toggleDarkMode={(darkMode: boolean) => setDarkMode(darkMode)}
        />
        <Nav page={page} handleNavClick={handleNavClick} />
        {router()}
      </main>
    </ThemeProvider>
  );
}

export default App;
