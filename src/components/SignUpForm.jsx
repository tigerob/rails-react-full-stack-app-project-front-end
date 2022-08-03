import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { signUp } from "../services/authServices";

const SignUpForm = () => {
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();

  const initialFormData = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(formData)
      .then((user) => {
        let errorMessage = "";
        if (user.error) {
          Object.keys(user.error).forEach((key) => {
            errorMessage = errorMessage.concat("", `${key} ${user.error[key]}`);
          });
          setError(errorMessage);
        } else {
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("token", user.jwt);
          dispatch({
            type: "setLoggedInUser",
            data: user.username,
          });
          dispatch({
            type: "setToken",
            data: user.jwt,
          });
          setFormData(initialFormData);
          navigate("/bookings");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <h1 class="title">Sign up</h1>
      {error && <p>{error}</p>}
      <form class="form" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleFormData}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleFormData}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleFormData}
          />
        </div>
        <div>
          <label htmlFor="password">Password confirmation:</label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleFormData}
          />
        </div>
        <input type="submit" value="Sign up" />
      </form>
    </>
  );
};

export default SignUpForm;
