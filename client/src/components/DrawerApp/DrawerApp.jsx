import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import DrawerItems from "./DrawerItems";
import * as PATHS from "../../utils/paths";

const DrawerApp = (props) => {
  const { window } = props;

  const drawerWidth = 240;
  const menuItems = [{ name: "Home", icon: "home", path: PATHS.HOMEPAGE }];
  const menuItems2 = [
    { name: "Calendar", icon: "calendar_today", path: PATHS.CALENDER },
    { name: "Clock In", icon: "access_time", path: PATHS.ClOCKIN },
    { name: "Employees", icon: "groups", path: PATHS.EMPLOYES },
    { name: "My Profile", icon: "manage_accounts", path: PATHS.MYPROFILE },
    { name: "Tasks", icon: "assignment", path: PATHS.TASKS },
    { name: "Time Off", icon: "hail", path: PATHS.TIMEOFF },
  ];

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <DrawerItems items={menuItems} />
      <Divider />
      <DrawerItems items={menuItems2} />
    </div>
  );

  return (
    <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default DrawerApp;
