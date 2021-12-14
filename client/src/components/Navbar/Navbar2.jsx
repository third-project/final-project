import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../images/logo.png"

const Navbar = (props) => {
  return (
    <nav>
      <IconButton
        aria-label="open drawer"
        edge="start"
        img={logo}
        onClick={props.handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        {CONSTS.CAPITALIZED_APP}
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
