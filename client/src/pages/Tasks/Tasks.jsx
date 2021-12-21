import React, { useEffect, useState, useCallback } from "react";
import { getMyTasks} from "../../services/tasks";
import "./Tasks.css";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import { Grid } from "@mui/material";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
  
    const fetchTasks = useCallback(() => {
      getMyTasks()
        .then((response) => {
          setTasks(response.data);
          setIsLoading(null);
        })
  
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
      fetchTasks();
    }, [fetchTasks]);
  
    return (
      <div className="Tasks">
        <h1>Tasks</h1>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <TaskForm onSubmitSuccess={()=>fetchTasks()} />
          </Grid>
          <Grid item xs={12} md={8}>
          <h3>Tasks List</h3>
            <TaskList tasks={tasks} isLoading={isLoading} />
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default Tasks;