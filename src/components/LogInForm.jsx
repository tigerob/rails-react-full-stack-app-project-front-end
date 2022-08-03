import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { logIn } from "../services/authServices";

const LogInForm = () => {
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();

  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    logIn(formData).then((user) => {
      if (user.error) {
        console.log("user.error", user.error);
        setError(user.error);
      } else {
        setError(null);
        sessionStorage.setItem("username", user.username);
        sessionStorage.setItem("token", user.jwt);
        sessionStorage.setItem("is_admin", user.is_admin);
        dispatch({
          type: "setLoggedInUser",
          data: user.username,
          data2: user.is_admin,
        });
        dispatch({
          type: "setToken",
          data: user.jwt,
        });
        sessionStorage.setItem("is_admin", user.is_admin);
        setFormData(initialFormData);
        navigate("/bookings");
      }
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
      <h1 class="title">Log in</h1>
      {error && <p>{error}</p>}
      <form class="form" onSubmit={handleSubmit}>
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
        <input type="submit" value="Log in" />
      </form>
    </>
  );
};

export default LogInForm;
