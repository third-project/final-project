// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

import { getLoggedIn, logout } from "./services/auth";
import * as USER_HELPERS from "./utils/userToken";
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingComponent from './components/Loading';

// ----------------------------------------------------------------------

export default function App() {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  
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
        // deal with error here
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

  return (

    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      
      { isLoading && <LoadingComponent /> }
      {!isLoading && <Router user={user} authenticate={authenticate} handleLogout={handleLogout} /> }
    </ThemeConfig>
  );
}
