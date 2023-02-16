import "@fontsource/vollkorn/400.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/source-code-pro/500.css";

import { darkModeTheme, lightModeTheme } from "./stylesheets/theme";
import { useEffect, useState } from "react";
import About from "./components/About";
import GlobalStylesheet from "./stylesheets/GlobalStyles";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
import { PageType } from "./types";
import ProjectsPage from "./components/ProjectsPage";
import { ThemeProvider } from "styled-components";
import Work from "./components/Work";
import WritingPage from "./components/WritingPage";

function App() {
  const localStorageThemePreference = JSON.parse(
    localStorage.getItem("MaximPekarskyDarkMode") ?? "false"
  );

  const [page, setPage] = useState<PageType>("about");
  const [appIsOpen, setAppIsOpen] = useState<boolean>(false);
  const [appLoaded, setAppLoaded] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorageThemePreference
  );

  const toggleDarkMode = () => {
    localStorage.setItem("MaximPekarskyDarkMode", `${!darkMode}`);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Although we're loading the light/dark mode preference from localStorage,
    // the transition still runs, causing a frustration background & text color shift.
    // To prevent this, we add a preload class, which is styled to "transition: none",
    // and remove it once after the app loads. `useEffect` runs after everything renders.
    if (!appLoaded) {
      document.body.classList.remove("preload");
      setAppLoaded(true);
    }
  });

  const handleNavClick = (newPage: PageType) => {
    setPage(newPage);
  };

  const handleHeaderClick = () => {
    setAppIsOpen(!appIsOpen);
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
          open={appIsOpen}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          handleHeaderClick={handleHeaderClick}
        />
        <MainContent open={appIsOpen}>
          <Nav page={page} handleNavClick={handleNavClick} />
          {router()}
        </MainContent>
      </main>
    </ThemeProvider>
  );
}

export default App;
