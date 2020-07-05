import React from "react";

import "../css/app.css";
import logo from "../logo.png";
import NavBar from "./NavBar";
import NavItems from "./NavItems";

const App = () => {
  return (
    <div>
      <NavBar>
        {/* eslint-disable-next-line */}
        <a href="#">
          <img src={logo} alt="logo" className="nav-logo" />
        </a>
        <NavItems />
      </NavBar>
    </div>
  );
};

export default App;
