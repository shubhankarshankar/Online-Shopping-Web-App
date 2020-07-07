import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "../css/app.css";
import logo from "../logo.png";
import NavBar from "./NavBar/NavBar";
import NavItems from "./NavBar/NavItems";
import Home from "./home/Home";
import About from "./about/About";
import ShoppingBag from "./shoppingBag/ShoppingBag";
import Wishlist from "./wishlist/Wishlist";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar>
          {/* eslint-disable-next-line */}
          <Link to="/">
            <img
              src="http://cosy.la-studioweb.com/wp-content/uploads/2017/04/logo-fashion.png"
              alt="logo"
              className="nav-logo"
            />
          </Link>
          <NavItems />
        </NavBar>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shopping-bag" component={ShoppingBag} />
        <Route path="/wishlist" component={Wishlist} />
      </div>
    </BrowserRouter>
  );
};

export default App;
