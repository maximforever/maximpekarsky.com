import About from "./components/About";
import GlobalStylesheet from "./stylesheets/GlobalStyles";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { PageType } from "../types";
import Projects from "./components/Projects";
import { ThemeProvider } from "styled-components";
import Work from "./components/Work";
import Writing from "./components/Writing";
import styled from "styled-components/macro";
import { theme } from "./stylesheets/theme";

import { useState } from "react";
const Main = styled.main`
  margin: 0 auto;
  max-width: 1600px;
  padding: 1rem;
`;

function App() {
  const [page, setPage] = useState<PageType>("about");

  const router = () => {
    switch (page) {
      case "about":
        return <About />;
        break;
      case "work":
        return <Work />;
        break;
      case "writing":
        return <Writing />;
        break;
      case "projects":
        return <Projects />;
        break;
      default:
        return <p>404: that's not a real page!</p>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStylesheet theme={theme} />
      <Main className="App">
        <Header />
        <Nav page={page} handleNavClick={(newPage) => setPage(newPage)} />
        {router()}
      </Main>
    </ThemeProvider>
  );
}

export default App;
