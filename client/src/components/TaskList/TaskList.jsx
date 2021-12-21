import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";


const TaskList = ({tasks,isLoading}) => {


  return (

    isLoading ? <CircularProgress/>

    :

    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {tasks.map((tasks) => (

          <ListItem
            key={tasks._id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments"></IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
                <ListItemText id={tasks}> 
                {tasks.description}
                </ListItemText> 
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  )}

  export default TaskList;

