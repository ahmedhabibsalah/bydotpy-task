import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Layout/NavBar";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import DarkThemeProvider from "./components/Layout/DarkThemeProvider";
import { LanguageProvider } from "./container/Language";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkThemeProvider>
          <LanguageProvider>
            <NavBar />
            <Routes>
              <Route path="/" Component={Home} />
            </Routes>
          </LanguageProvider>
        </DarkThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
