import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const Navigation = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    dispatch({
      type: "setLoggedInUser",
      data: null,
    });
    dispatch({
      type: "setToken",
      data: null,
    });
  };

  return (
    <nav class="nav">
      <Link to="/">Home</Link>
      <Link to="/bookings">Bookings</Link>
      <Link to="/prices">Prices</Link>
      {!loggedInUser && <Link to="/login">Login</Link>}
      {!loggedInUser && <Link to="/signup">Sign Up</Link>}
      {loggedInUser && (
        <Link to="/account" onClick={handleLogout}>
          Account
        </Link>
      )}
      {loggedInUser && (
        <Link to="/logout" onClick={handleLogout}>
          Logout
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
