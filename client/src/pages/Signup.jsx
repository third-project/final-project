import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-username">Email</label>
        <input
          id="input-email"
          type="email"
          name="email"
          placeholder="Write your email address"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-name">Name</label>
        <input
          id="input-name"
          type="text"
          name="name"
          placeholder="Your first name"
          value={name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-lastName">Last Name</label>
        <input
          id="input-lastName"
          type="text"
          name="lastName"
          placeholder="Your last name"
          value={lastName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
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

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
