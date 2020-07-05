import React from "react";

const NavBar = props => {
  return (
    <div className="nav-wrapper">
      {" "}
      <div className="nav-inner-wrapper">{props.children}</div>{" "}
    </div>
  );
};

export default NavBar;
