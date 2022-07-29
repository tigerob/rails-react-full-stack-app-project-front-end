import React, { useEffect, useState } from "react";
import { useGlobalState } from "../utils/stateContext";

const AsyncAwait = () => {
  const [bookings, setBookings] = useState([]);
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  const mybookings = bookings.filter((booking) => {
    return booking.username === loggedInUser;
  });

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/bookings");
    const data = await response.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(mybookings);
  return (
    <div>
      <div>
        <h1 class="title">Your Bookings</h1>
      </div>
      <div class="price-info"></div>
      {mybookings.length > 0 && (
        <ul>
          {mybookings.map((mybookings) => (
            <li class="info-list" key={mybookings}>
              <p>Date: {mybookings.date}</p>
              <p>Time: {mybookings.time}</p>
              <p>Location: {mybookings.location}</p>
              <p>Instrument: {mybookings.instrument}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AsyncAwait;
