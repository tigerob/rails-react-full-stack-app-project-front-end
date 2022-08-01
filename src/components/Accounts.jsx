import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const Accounts = () => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  let admin = sessionStorage.getItem("is_admin");

  if (admin === "true") {
    return (
      <div>
        <h1>Welcome {loggedInUser && <p>{loggedInUser}</p>} </h1>
        <div>
          <div>
            <Link to="/accounts/mybookings">View All Bookings</Link>
          </div>
          <div>
            <Link to="/prices">Change Prices</Link>
          </div>
          <div>
            <Link to="/accounts/users">Make User Admin</Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome {loggedInUser && <p>{loggedInUser}</p>} </h1>
        <div>
          <div>
            <Link to="/accounts/mybookings">View your Bookings</Link>
          </div>
          <div>
            <Link to="/accounts/mybookings">Change Your Details</Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Accounts;
