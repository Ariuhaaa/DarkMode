import { NavLink, Outlet } from "react-router-dom";
import Home from "./Home";
import ReactSwitch from "react-switch";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
function Layout() {
  // function onChnage ()=>{

  // }
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <div className="d-flex justify-content-between mt-3 ">
          <div>
            <h4>REDDIT</h4>
          </div>
          <div className="d-flex gap-4">
            <div className="switch">
              <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            {/* <NavLink to="/darkMode">
            <i class="bi bi-moon layout"></i>
          </NavLink> */}
            <div className="d-flex gap-3 mt-1">
              <NavLink to="/login" className="layout">
                <h4>LOG IN</h4>
              </NavLink>
              <NavLink to="/signUp" className="layout">
                <h4>SIGN UP</h4>
              </NavLink>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
