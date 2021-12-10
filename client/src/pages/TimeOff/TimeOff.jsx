import React from "react";
import "./TimeOff.css";
import DatePicker from "../../components/DatePicker/DatePicker";
import { Button } from "@mui/material";
import { createTimeOff } from "../../services/timeOff";

const TimeOff = () => {
  const [value, setValue] = React.useState([null, null]);
  function onSubmit() {
    if (value && value[0] && value[1]) {
      createTimeOff(value);
    }
  }

  return (
    <div>
      <h1>Time Off</h1>
      <DatePicker value={value} setValue={setValue} />

      
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
