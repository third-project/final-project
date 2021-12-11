import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const EventDetail = (props) => {
  function deleteClick(event) {
    console.log(event);
  }
  function approveClick(event) {
    console.log(event);
  }
  function deniedClick(event) {
    console.log(event);
  }

  return (
    <div>
      <ButtonGroup size="large" aria-label="large button group">
        <Button variant="outlined" onClick={deleteClick}>
          Delete
        </Button>

        <Button variant="outlined" onClick={approveClick}>
          Approve
        </Button>
        <Button variant="outlined" onClick={deniedClick}>
          Denied
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default EventDetail;
