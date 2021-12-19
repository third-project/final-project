import React, { useState, useEffect } from "react";
import "./Tasks.css";
import { Button, Grid, TextField, Alert } from "@mui/material";
import { createTask } from "../../services/tasks.service";

const Tasks = (props) => {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(null);

  function timer() {
    setTimeout(() => setStatus(null), 2000);
  }

  async function onSubmit() {
    const task = {
      description: description,
    };
    const response = await createTask(task);
    setStatus(response.status);
    timer();
  }

  return (
    <div>
      <h1>Tasks</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <TextField
          item
          name="task"
          id="task"
          label="task"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          multiline
          rows={4}
          placeholder="Write your task"
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          className="button_submit"
          type="submit"
          onClick={onSubmit}
        >
          Add
        </Button>
        {status && (
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        )}
      </Grid>
    </div>
  );
};

export default Tasks;
