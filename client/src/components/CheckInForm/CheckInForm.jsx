import { Button } from "@mui/material";
import React from "react";
import { registerHour } from "../../services/checkIn";

const CheckInForm = (props) => {
  async function initialHour() {
    const checkIn = {
      startDate: new Date(),
    };
    await registerHour(checkIn);
  }
  return (
    <div>
      <Button onClick={() => initialHour()}>Entrada</Button>
    </div>
  );
};

export default CheckInForm;
