import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { signUp } from "../services/authServices";
import image from "../assets/mv2.gif";

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
      <div class="image">
        <img src={image} alt="music" />
      </div>
      <div class="info-head">
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div class="info">
        <div class="center">
          <form class="form" onSubmit={handleSubmit}>
            <div>
              <label>Username: </label>
              <br></br>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleFormData}
              />
            </div>
            <div>
              <label>Email: </label>
              <br></br>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleFormData}
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <br></br>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleFormData}
              />
            </div>
            <div>
              <label htmlFor="password">Password confirmation: </label>
              <br></br>
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleFormData}
              />
            </div>
            <div class="center">
              <buton class="button">
                <input class="button" type="submit" value="Sign up" />
              </buton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
