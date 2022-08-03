import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const Bookings = () => {
  // const {store, dispatch} = useGlobalState()
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  if (loggedInUser) {
    return (
      <>
        <h1 class="title">Bookings</h1>
        <h3>Hello, {loggedInUser}</h3>
        <p>
          Click {<Link to="/bookings/new">here</Link>} to make a new booking
        </p>
        <p>
          View all upcoming and past bookings in:{" "}
          {<Link to="/accounts">Account</Link>}
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1 class="title">Bookings</h1>
        <p>Log in or sign up to make a booking</p>
      </>
    );
  }
};

export default Bookings;
