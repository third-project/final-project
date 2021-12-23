import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import DrawerApp from "./components/DrawerApp/DrawerApp";
import { Box } from "@mui/system";


export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <Box sx={{ display: "flex", maxWidth: "100vw"}} className="App">
      {user ? (
        <DrawerApp
          user={user}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      ) : null}

      <Box sx={{ flexGrow: 1, flexShrink: 0, width:"81vw", maxWidth: "100vw"}}>
        <Navbar
          handleLogout={handleLogout}
          user={user}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box sx={{ display: "block", pl: 2, maxWidth: "68vw" }}>
          <Routes>
            {routes({ user, authenticate, handleLogout, setUser }).map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
                
              />
            ))}
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
