import GlobalStylesheet from "./stylesheets/GlobalStyles";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { ThemeProvider } from "styled-components";
import styled from "styled-components/macro";
import { theme } from "./stylesheets/theme";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1600px;
  padding: 1rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStylesheet theme={theme} />
      <Main className="App">
        <Header />
        <Nav />
      </Main>
    </ThemeProvider>
  );
}

export default App;
