import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import { pink } from "@mui/material/colors";

const TaskList = (props) => {
  const { tasks, isLoading } = props;

  return isLoading ? (
    <CircularProgress />
  ) : (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: '#D8DDEE' }}>
      {tasks?.map((tasks) => (
        <ListItem
          key={tasks._id}
          secondaryAction={
            <IconButton edge="end" aria-label="comments"></IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon color="success">
              <Checkbox
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            </ListItemIcon>
            <ListItemText id={tasks}>{tasks.description}</ListItemText>
          </ListItemButton>
        </ListItem>
        
      ))}
    </List>
  );
  
};

export default TaskList;
