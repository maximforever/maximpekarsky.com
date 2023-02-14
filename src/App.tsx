import About from "./components/About";
import GlobalStylesheet from "./stylesheets/GlobalStyles";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { PageType } from "../types";
import ProjectsPage from "./components/ProjectsPage";
import { ThemeProvider } from "styled-components";
import Work from "./components/Work";
import WritingPage from "./components/WritingPage";
import { theme } from "./stylesheets/theme";

import { useState } from "react";

function App() {
  const [page, setPage] = useState<PageType>("about");

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
    <ThemeProvider theme={theme}>
      <GlobalStylesheet theme={theme} />
      <main className="App">
        <Header />
        <Nav page={page} handleNavClick={handleNavClick} />
        {router()}
      </main>
    </ThemeProvider>
  );
}

export default App;
