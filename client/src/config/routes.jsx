import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn/LogIn";
import Signup from "../pages/Signup/Signup";
import * as PATHS from "../utils/paths";
import Calender from "../pages/Calender/Calender";
import ClockIn from "../pages/ClockIn/ClockIn";
import Employees from "../pages/Employees/Employees";
import MyProfile from "../pages/MyProfile/MyProfile";
import Tasks from "../pages/Tasks/Tasks";
import TimeOff from "../pages/TimeOff/TimeOff";
import CalendarBoss from "../pages/CalendarBoss/CalendarBoss";

function checkBossUserPermissions(user) {
  if (user.role === "Boss") {
    return true;
  }
  return false;
}

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.CALENDER,
      element: user ? (
        checkBossUserPermissions(user) ?  <CalendarBoss {...props} /> : <Calender {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.ClOCKIN,
      element: user ? (
        <ClockIn {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.EMPLOYES,
      element: user ? (
        <Employees {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.MYPROFILE,
      element: user ? (
        <MyProfile {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.TASKS,
      element: user ? (
        <Tasks {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.TIMEOFF,
      element: user ? (
        <TimeOff {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: "*",
      element: <Navigate to={PATHS.HOMEPAGE} replace />,
    },
  ];
};

export default routes;
