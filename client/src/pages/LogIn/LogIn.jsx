import React, { useState } from "react";
import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import "./LogIn.css"
import * as PATHS from "../../utils/paths";
import * as USER_HELPERS from "../../utils/userToken";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className="Login">
    <Box
        sx={{width: 250, height: 300, textAlign: 'center', '& .MuiTextField-root': { m: 1, width: '25ch' } }} autoComplete="off" >
      <form onSubmit={handleFormSubmission} className="auth__form">
      <h1>Log In</h1>
        <label htmlFor="input-email">Email</label>
        <TextField id="input-email" label="Your email" variant="outlined" type="email"
          name="email"
          placeholder="Write your email address"
          value={email}
          size= "small"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password</label>
        <TextField id="input-password" label="Your Password" variant="outlined" type="password"
          name="password"
          placeholder="Write your password"
          value={password}
          size= "small"
          onChange={handleInputChange}
          required
          minLength="8"
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
