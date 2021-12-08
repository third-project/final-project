import React, { useState } from "react";
import { signup } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import * as PATHS from "../../utils/paths";
import * as USER_HELPERS from "../../utils/userToken";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    email: "",
    name: "",
    lastName: "",
    password: "",
  });
  const { email, name, lastName, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault(); /// cancel the default behavior of the form, the page reloads. After preventing the page from reloading, we access the input data stored in the state 
    const credentials = {
      email,
      name, 
      lastName,
      password,
    };
      signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        console.log(res.status)
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className= "Signup">
      <Box
        sx={{width: 250, height: 300, textAlign: 'center', '& .MuiTextField-root': { m: 1, width: '25ch' } }} autoComplete="off" >
      

      <form onSubmit={handleFormSubmission} className="auth__form">
      <h1>Sign Up</h1>
      <label htmlFor="input-email"></label>
      <TextField id="input-email" label="Your email" variant="outlined" type="email"
          name="email"
          placeholder="Write your email address"
          value={email}
          size= "small"
          onChange={handleInputChange}
          // helperText="Error is here"
          required
      />
      <label htmlFor="input-name"></label>
      <TextField id="input-name" label="Name" variant="outlined" type="text"
          name="name"
          placeholder="Your first name"
          value={name}
          size= "small"
          onChange={handleInputChange}
          htmlFor="input-name"
          
          // helperText="Error is here"
          required
      />
      <label htmlFor="input-lastName"></label>
      <TextField id="input-lastName" label="Last Name" variant="outlined" type="text"
          name="lastName"
          placeholder="Your last name"
          value={lastName}
          size= "small"
          onChange={handleInputChange}
          htmlFor="input-lastName"
          // helperText="Error is here"
          required
      />
      <label htmlFor="input-password"></label>
      <TextField id="input-password" label="Your Password" variant="outlined" type="password"
          name="password"
          placeholder="Create a password"
          value={password}
          size= "small"
          onChange={handleInputChange}
          htmlFor="input-password"
          // helperText="Error is here"
          required
      />
        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <Button variant="outlined" className="button_submit" type="submit">
          Submit
        </Button>
      </form>
      </Box>
    </div>
  );
}
