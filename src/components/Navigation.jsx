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
    <>
      <input type="checkbox" id="hamburger-input" class="burger-shower" />
      <label id="hamburger-menu" for="hamburger-input">
        <nav id="sidebar-menu">
          <h3>Menu</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
            <li>
              <Link to="/prices">Prices</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>{!loggedInUser && <Link to="/login">Login</Link>}</li>
            <li>{!loggedInUser && <Link to="/signup">Sign Up</Link>}</li>
            <li>{loggedInUser && <Link to="/accounts">Account</Link>}</li>
            <li>
              {loggedInUser && (
                <Link to="/logout" onClick={handleLogout}>
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </label>

      <div class="overlay"></div>
      <nav class="nav">
        <Link to="/">Home</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/prices">Prices</Link>
        <Link to="/contact">Contact</Link>
        {!loggedInUser && <Link to="/login">Login</Link>}
        {!loggedInUser && <Link to="/signup">Sign Up</Link>}
        {loggedInUser && <Link to="/accounts">Account</Link>}
        {loggedInUser && (
          <Link to="/logout" onClick={handleLogout}>
            Logout
          </Link>
        )}
      </nav>
    </>
  );
};

export default Navigation;
