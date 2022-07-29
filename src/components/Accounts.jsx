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
        <div>
          <Link to="/accounts/mybookings">View Your Bookings</Link>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
