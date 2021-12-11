import React, { useState } from "react";
import "./TimeOff.css";
import DatePicker from "../../components/DatePicker/DatePicker";
import {
  Button,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { createTimeOff } from "../../services/timeOff";

//TODO FEEDBACK CUANDO SE HACE UNA PETICION HAY QUE MOSTRAR ALGO PARA QUE SE SEPA

const TimeOff = () => {
  const [dates, setDates] = useState([null, null]);
  const [summary, setSummary] = useState("");
  const [type, setType] = useState("Holidays");

  function isValidForm(){
    return (dates && dates[0] && dates[1]) ? true : false;
  }

  function onSubmit() {
    if (isValidForm()) {
      const timeOff = {
        startDate: dates[0],
        endDate: dates[1],
        summary: summary,
        type: type,
      };
      createTimeOff(timeOff);
    }
  }

  return (
    <div className="TimeOff">
      <h1>Time Off</h1>
      <DatePicker
        dates={dates}
        setDates={setDates}
        startText="Start"
        endText="End"
      />

      <TextField
        name="summary"
        id="summary"
        label="summary"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        multiline
        rows={4}
        placeholder="Write your comment"
      />

      <Select
        id="time-off"
        value={type}
        label="Type"
        onChange={(event) => setType(event.target.value)}
      >
        <MenuItem value="Holidays">Holidays</MenuItem>
        <MenuItem value="Illness">Illness</MenuItem>
        <MenuItem value="Maternity / Paternity">Maternity / Paternity</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>

      <Button
        variant="outlined"
        className="button_submit"
        type="submit"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default TimeOff;
