import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import { pink } from "@mui/material/colors";
import {Button} from "@mui/material"; 
import { deleteTask } from "../../services/tasks";

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
              <Checkbox
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            <ListItemText id={tasks}>{tasks.description}</ListItemText>
            <Button
          variant="outlined"
          className="button_submit"
          color = "secondary"
          type="submit"
          onSubmit={deleteTask}
          >
          Delete 
        </Button>
          </ListItemButton>
        </ListItem>
        
      ))}
    </List>
  );
  
};

export default TaskList;
