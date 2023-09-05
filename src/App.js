import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Layout/NavBar";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import DarkThemeProvider from "./components/Layout/DarkThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkThemeProvider>
          <NavBar />
        </DarkThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
