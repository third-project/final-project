import React, { useState, useEffect } from "react";
import "./TaskForm.css";
import { Button, Grid, TextField, Alert } from "@mui/material";
import { createTask } from "../../services/tasks";

const TaskForm = ({ onSubmitSuccess }) => {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(null);

  function isValidForm() {
    return description ? true : false;
  }

  function timer() {
    setTimeout(() => setStatus(null), 2000);
  }

  useEffect(() => {
    if (status === true) {
      setDescription("");
    }
  }, [status, onSubmitSuccess]);

  async function onSubmit() {
    if (isValidForm()) {
      const task = {
        description: description,
      };
      const response = await createTask(task);
      setStatus(response.status);
      timer();
    }
  }

  return (
    <div>
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
        {status===false && (
            <Alert severity="error">
              There was an error
            </Alert>
          )}
      </Grid>
    </div>
  );
};

export default TaskForm;
