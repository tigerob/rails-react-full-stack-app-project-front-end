import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import image from "../assets/mv2.gif";

const Accounts = () => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  let admin = sessionStorage.getItem("is_admin");

  if (admin === "true") {
    return (
      <div>
        <h1 class="title">Welcome {loggedInUser && <p>{loggedInUser}</p>} </h1>
        <div>
          <div class="image">
            <img src={image} alt="music" />
          </div>
          <h2 class="info-head">
            What would you<br></br>like to do?
          </h2>
          <div class="info">
            <button class="button">
              <Link class="links" to="/accounts/mybookings">
                View All Bookings
              </Link>
            </button>
            <button class="button">
              <Link class="links" to="/prices">
                Change Prices
              </Link>
            </button>
            <button class="button">
              <Link class="links" to="/accounts/users">
                Make User Admin
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 class="title">Welcome {loggedInUser && <p>{loggedInUser}</p>} </h1>
        <div>
          <div class="image">
            <img src={image} alt="music" />
          </div>
          <h2 class="info-head">
            What would you<br></br>like to do?
          </h2>
          <div class="info">
            <button class="button">
              <Link class="links" to="/accounts/mybookings">
                View your Bookings
              </Link>
            </button>
            {/* <br></br> */}
            {/* <button class="button">
              <Link class="links" to="/accounts/mybookings">
                Change Your Details
              </Link>
            </button> */}
          </div>
        </div>
      </div>
    );
  }
};

export default Accounts;
