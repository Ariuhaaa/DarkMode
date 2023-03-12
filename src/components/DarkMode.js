// import { useState } from "react";
// import React, { useContext } from "react";
// import { CurrentUserContext, ThemeContext } from "./Context";

// function DarkMode() {
//   const [theme, setTheme] = useState("bg-dark");
//   const [currentUser, setCurrentUser] = useState(null);

//   return (
//     <ThemeContext.Provider value={theme}>
//       <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
//         {/* <div>
//           <UserInfo />
//         </div> */}
//         <div className="m-3 d-flex align-items-center">
//           <input
//             type={"checkbox"}
//             className="form-check"
//             name="switchTheme"
//             checked={theme == "bg-dark"}
//             value={theme}
//             onChange={(e) => {
//               setTheme(e.target.checked ? "bg-dark" : "bg-light");
//             }}
//           />
//           <label htmlFor="switchTheme" className="form-label">
//             Dark mode
//           </label>
//         </div>
//       </CurrentUserContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

// export default DarkMode;
