import { Icon, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const DrawerItems = (props) => {
    
  return (
    <List>
      {props.items.map((item, i) => (
        <ListItem button key={i}>
          <ListItemIcon>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerItems;