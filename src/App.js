import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Layout/NavBar";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ theme: "light" }}>
        <NavBar />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
