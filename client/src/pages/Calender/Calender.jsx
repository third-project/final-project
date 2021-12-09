import { Box } from "@mui/material";
import React from "react";
import CalendarApp from "../../components/CalendarApp/CalandarApp";
import './Calender.css'

const Calender = () => {
  return (
    <Box sx={{ width: "80%"}}>
      <h1>Calender </h1>
      <CalendarApp/>
    </Box>
  );
};

export default Calender;