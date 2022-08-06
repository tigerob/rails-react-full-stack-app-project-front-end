import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import image from "../assets/mv2.gif";

const Bookings = () => {
  // const {store, dispatch} = useGlobalState()
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  if (loggedInUser) {
    return (
      <div>
        <h1 class="title">Bookings</h1>
        <div class="image">
          <img src={image} alt="music" />
        </div>
        <div class="info">
          <h2>Hello, {loggedInUser} would you like to</h2>
          <button class="button">
            <Link class="links" to="/bookings/new">
              Make a Booking
            </Link>
          </button>
          <button class="button">
            <Link class="links" to="/accounts/mybookings">
              View your Bookings
            </Link>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1 class="title">Bookings</h1>

        <p class="text">Log in or sign up to make a booking</p>
        <div class="image">
          <img src={image} alt="music" />
        </div>
      </>
    );
  }
};

export default Bookings;
