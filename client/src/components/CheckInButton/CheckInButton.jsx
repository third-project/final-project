import { Button } from "@mui/material";
import React from "react";
import { registerStartHour } from "../../services/checkInOut";

export const CheckInButton = (props) => {

  async function initialHour() {
    const checkIn = {
      startDate: new Date()
    };
    await registerStartHour(checkIn);
    props.setRefresh(true);
  }

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={() => initialHour()}>Check In</Button>
    </>
  );
};






