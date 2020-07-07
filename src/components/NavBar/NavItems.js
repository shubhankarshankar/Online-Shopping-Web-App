import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <ul className="nav-list">
      <li className="lap-link">
        {/* eslint-disable-next-line */}
        <NavLink exact to="/">
          home
        </NavLink>
      </li>
      <li className="lap-link">
        {/* eslint-disable-next-line */}
        <NavLink to="/about">about</NavLink>
      </li>

      <div className="nav-icons">
        <li>
          {/* eslint-disable-next-line */}
          <NavLink to="/shopping-bag">
            <i className="fas fa-shopping-bag icon"></i>
          </NavLink>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <NavLink to="/wishlist">
            <i className="far fa-heart icon lap-link"></i>
          </NavLink>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">
            <i className="fas fa-search icon"></i>
          </a>
        </li>
      </div>
    </ul>
  );
};

export default NavItems;
