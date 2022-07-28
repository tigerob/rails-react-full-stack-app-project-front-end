import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const AsyncAwait = () => {
  const [bookings, setBookings] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/bookings");
    const data = await response.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 class="title">Your Bookings</h1>
      </div>
      <div class="price-info"></div>
      {bookings.length > 0 && (
        <ul>
          {bookings.map((bookings) => (
            <li class="info-list" key={bookings}>
              <h2>Date: {bookings.date}</h2>
              <h2>Time:{bookings.time}</h2>
              <h2>Location: {bookings.location}</h2>
              <h2>Instrument: {bookings.instrument}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AsyncAwait;
