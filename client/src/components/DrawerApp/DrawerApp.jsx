import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import DrawerItems from "./DrawerItems";

const DrawerApp = (props) => {
  const { window } = props;

  const drawerWidth = 240;
  const menuItems = [{ name: "Home", icon: "home" }];
  const menuItems2 = [
    { name: "All mail", icon: "mail" },
    { name: "Trash", icon: "home" },
    { name: "Spam", icon: "mail" },
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
          keepMounted: true, // Better open performance on mobile.
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
