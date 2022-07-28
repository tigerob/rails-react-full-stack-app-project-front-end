import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const Accounts = () => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  return (
    <div>
      <h1>Welcome {loggedInUser && <p>{loggedInUser}</p>} </h1>
      <div>
        <h3>View Your Account Infomation</h3>
        <div>
          <Link to="/accounts/profile">View and Edit Account</Link>
        </div>
        <h3>View Your Current Bookings</h3>
        <div>
          <Link to="/accounts/mybookings">My Bookings</Link>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
