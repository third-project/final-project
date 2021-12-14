import React, { useState } from "react";
import "./My Profile.css";
import { Person, Business } from "@mui/icons-material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { editProfile } from "../../services/user";
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme({
  palette: {
    primary: {
      main: "#0e2b60",
      light: "#43538e",
      dark: "#000036",
    },
    secondary: {
      main: "#c8534c",
    },
  },
});

const MyProfile = (props) => {
  
  const {_id, name, lastName, lastName2, dateOfBirth, identityCard, legalGender, phoneNumber, } = props.user
  
  const [form, setForm] = useState({
    _id: _id,
    name: name,
    lastName: lastName,
    lastName2: lastName2,
    dateOfBirth: dateOfBirth,
    identityCard: identityCard,
    legalGender: legalGender,
    phoneNumber: phoneNumber,
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    editProfile(form).then((res) => {
      if (!res.status) {
        return setError({ error: "There is an error" });
      }
      return setMessage("Your profile was updated succesfully")
    });
  }

  return (
    
    <ThemeProvider theme={theme}>
      <div className="MyProfile">
        <section>
          <p className="title">My Profile</p>
        </section>
        <section className="generalInfo">
          <div className="divInfo">
            <Person
              sx={{ color: "#c8534c", fontSize: 40, textAlign: "center" }}
            />
            <p className="formTitle">General information</p>
            <span>Fill in your personal data</span>
          </div>
          <div className="divForm">
            <Box
              sx={{
                width: 250,
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              autoComplete="off"
            >
              <form onSubmit={handleSubmission}>
              <input className="hidden" value={_id} onChange={handleInputChange}></input>

                <label>Name:</label>
                <TextField
                  className="input"
                  id="input-name"
                  type="text"
                  name="name"
                  size="small"
                  value={form.name || ""}
                  onChange={handleInputChange}
                />
                <label>Last name:</label>
                <TextField
                  className="input"
                  id="input-lastName"
                  type="text"
                  name="lastName"
                  size="small"
                  value={form.lastName || ""}
                  onChange={handleInputChange}
                />
                <label>Second last name:</label>
                <TextField
                  className="input"
                  id="input-lastName2"
                  type="text"
                  name="lastName2"
                  size="small"
                  value={form.lastName2 || ""}
                  onChange={handleInputChange}
                />
                <label>Date of birth:</label>
                <TextField
                  className="input"
                  id="input-dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  size="small"
                  value={form.dateOfBirth || ""}
                  onChange={handleInputChange}
                />
                <label>Identification number:</label>
                <TextField
                  className="input"
                  id="input-identification"
                  variant="outlined"
                  type="text"
                  name="identityCard"
                  size="small"
                  value={form.identityCard || ""}
                  onChange={handleInputChange}
                />
                <label>Legal Gender:</label>
                <TextField
                  className="input"
                  id="input-legalGender"
                  type="text"
                  name="legalGender"
                  size="small"
                  select
                  value={form.legalGender}
                  onChange={handleInputChange}
                >
                <MenuItem value={"Female"} >
                  Female
                </MenuItem>
                <MenuItem  value={"Male"} >
                  Male
                </MenuItem>
                <MenuItem value={"Other"} >
                  Other
                </MenuItem>
                </TextField>
                <label>Phone number:</label>
                <TextField
                  className="input"
                  id="input-phoneNumber"
                  variant="outlined"
                  type="text"
                  name="phoneNumber"
                  size="small"
                  value={form.phoneNumber || ""}
                  onChange={handleInputChange}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  className="button_submit"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
              {message && (
                <div>
                  <span>{message}</span>
                </div>
              )}
            </Box>
          </div>
        </section>

        <section className="workInfo">
          <div className="divInfo">
            <Business
              sx={{ color: "#c8534c", fontSize: 40, textAlign: "center" }}
            />
            <p className="formTitle">Work information</p>
            <span>Basic information about your role</span>
          </div>
          <div className="divForm">
            <Box
              sx={{
                width: 250,
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              autoComplete="off"
            >
              <form>
                <label>Company:</label>
                <TextField
                  className="input"
                  id="input-company"
                  type="text"
                  name="company"
                  size="small"
                  // value={company}
                  onChange={handleInputChange}
                />
                <label>Start date:</label>
                <TextField
                  className="input"
                  id="input-startDate"
                  type="date"
                  name="startDate"
                  size="small"
                  // value={lastName2}
                  onChange={handleInputChange}
                />
                <label>Working from:</label>
                <TextField
                  className="input"
                  id="input-workingFrom"
                  type="text"
                  name="workingFrom"
                  size="small"
                  // value={dateOfBirth}
                  onChange={handleInputChange}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  className="button_submit"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Box>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default MyProfile