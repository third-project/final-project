import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import "./Navbar.css";
import { Button } from "@mui/material";

const Navbar = (props) => {
  const settings = [
    { name: "Profile" },
    { name: "Account" },
    { name: "Dashboard" },
    { name: "Logout", action: props.handleLogout },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="Navbar" sx={{backgroundColor:"#BFB8EB"}}>
      <Box>
        <Toolbar disableGutters>
          <IconButton
            aria-label="open drawer"
            edge="start"
            img={logo}
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            Grouping
          </Typography>

          {props.user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" onClick={setting.action}>
                      {setting.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <>
              <Button
                sx={{ backgroundColor: "white", color: "#BFB8EB",mr:"1em" }}
                component={Link}
                to={PATHS.SIGNUPPAGE}
                variant="contained"
                startIcon={<AccountCircleTwoToneIcon />}
              >
                Sign Up
              </Button>

              <Button
              sx={{ backgroundColor: "white", color: "#BFB8EB" }}
                component={Link}
                to={PATHS.LOGINPAGE}
                variant="contained"
                startIcon={<LoginTwoToneIcon />}
              >
                Log In
              </Button>
            </>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
