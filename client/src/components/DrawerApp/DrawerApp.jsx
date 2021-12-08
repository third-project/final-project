import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Icon from '@mui/material/Icon';

const DrawerApp = (props) => {
  const drawerWidth = 240;
  const menuItems = [{name: "Home", icon: "home"}];
  // La variable de la linea 15 sirve para cargar desde aquí los iconos y poder hacer la drawer generica.

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item,i) => (
          <ListItem button key={i}>
             <ListItemIcon>
             <Icon>{item.icon}</Icon>
            </ListItemIcon> 
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
             <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              {/* Todo este contenido es de ejemplo. Se debe poner como el de la parte superior */}
            </ListItemIcon> 
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerApp;
