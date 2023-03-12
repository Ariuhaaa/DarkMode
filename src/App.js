import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp";
import DarkMode from "./components/DarkMode";
import Login from "./components/Login";
import Home from "./components/Home";
import ReactSwitch from "react-switch";

import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/darkMode" element={<DarkMode />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
