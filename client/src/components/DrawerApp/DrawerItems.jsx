import { Icon, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './DrawerApp.css';

const DrawerItems = (props) => {
    
  return (
    <List>
      {props.items.map((item, i) => (
        <ListItem button key={i} component={Link} to={item.path}>
          <ListItemIcon>
            <Icon baseClassName="material-icons-two-tone">{item.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerItems;