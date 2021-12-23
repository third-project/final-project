import React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const DatePicker = (props) => {
  return (
    <LocalizationProvider color="secondary"dateAdapter={AdapterDateFns}>
      <DateRangePicker
        color="secondary"
        startText={props.startText}
        endText={props.endText}
        value={props.dates}
        onChange={(newValue) => {
          props.setDates(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField color="secondary" {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField color="secondary" {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
