import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="ui secondary  menu">
      <div className="ui container">
        <center>
          <Link to="/">
            <img
              src="img/koompi-logo-w-01.svg"
              height="35px"
              alt="koompi"
              className="mobile hidden"
            />
            <img
              src="img/koompi-logo-w-02.svg"
              height="35px"
              alt="koompi"
              className="mobile only marginLogo"
            />
          </Link>
        </center>
        <div className="menu right">
          <NavLink
            className="item navbarTop menuFadeIn"
            to="/feature"
            activeClassName="active"
          >
            មុខងារ
          </NavLink>
          <NavLink
            className="item navbarTop menuFadeIn"
            to="/about-us"
            activeClassName="active"
          >
            អំពីយើង
          </NavLink>
          <NavLink
            className="item navbarTop menuFadeIn"
            to="/retailers"
            activeClassName="active"
          >
            ដៃគូលក់រាយ
          </NavLink>
          <NavLink
            className="item navbarTop menuFadeIn"
            to="/news-and-events"
            activeClassName="active"
          >
            ព័ត៍មាន
          </NavLink>
          <div className="item mobile only">
            {/* <i className="fas fa-times btnAnimationClose"></i> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
