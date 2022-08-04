import React, { useEffect, useState } from "react";
import { useGlobalState } from "../utils/stateContext";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  let mybookings = bookings.filter((booking) => {
    return booking.username === loggedInUser;
  });
  const [user_id, setUser_id] = useState(null);
  const [username, setUsername] = useState(null);
  const [id, setId] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [location, setLocation] = useState();
  const [instrument, setInstrument] = useState();
  let admin = sessionStorage.getItem("is_admin");
  const editBooking = () => setShowResults(true);
  const [showResults, setShowResults] = React.useState(false);

  if (admin === "true") {
    mybookings = bookings;
  }
  const fetchData = async () => {
    const response = await fetch(
      "https://mia-music-studios-api.herokuapp.com/bookings",
    );
    const data = await response.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function deleteBooking(id) {
    fetch(`https://mia-music-studios-api.herokuapp.com/bookings/${id}`, {
      method: "DELETE",
    });
    setBookings(bookings.filter((booking) => booking.id !== id));
  }

  function selectBooking(id) {
    const booking = bookings.find((booking) => booking.id === id);
    setUser_id(booking.user_id);
    setUsername(booking.username);
    setId(booking.id);
    setDate(booking.date);
    setTime(booking.time);
    setLocation(booking.location);
    setInstrument(booking.instrument);
  }

  function updateBooking() {
    let booking = { user_id, username, id, date, time, location, instrument };
    fetch(`https://mia-music-studios-api.herokuapp.com/bookings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });
    window.location.reload();
    alert("Booking updated");
  }

  return (
    <>
      <div>
        <div>
          <h1 class="title">Your Bookings</h1>
        </div>
        {mybookings.length > 0 && (
          <table class="styled-table">
            <tr>
              <th>Student</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Instrument</th>
              <th>Operations</th>
            </tr>
            <tbody>
              {mybookings.map((booking) => (
                <tr>
                  <td>{booking.username}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>{booking.location}</td>
                  <td>{booking.instrument}</td>
                  <td>
                    <button
                      class="button"
                      onClick={() => selectBooking(booking.id, { editBooking })}
                    >
                      {showResults ? <return /> : null}
                      <p class="links">Edit</p>
                    </button>
                    <button
                      class="button"
                      onClick={() => deleteBooking(booking.id)}
                    >
                      <p class="links">Delete</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div class="form-style-5">
          <h1>Update Booking</h1>
          <input type="hidden" value={user_id} />
          <input type="hidden" value={username} />
          <input type="hidden" value={id} />
          <input
            type="text"
            disabled={true}
            value={date}
            onChange={(e) => {}}
          />
          <br></br>
          <input
            disabled={true}
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <br></br>
          <label>Location:</label>
          <label htmlFor="location">
            <input
              type="radio"
              name="location"
              id="location"
              checked={location === "Studio"}
              value="Studio"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            Studio
          </label>
          <label htmlFor="location">
            <input
              type="radio"
              name="location"
              id="location"
              checked={location === "Online"}
              value="Online"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            Online
          </label>
          <br></br>
          <label>Instrument:</label>
          <label htmlFor="instrument">
            <input
              type="radio"
              name="instrument"
              id="instrument"
              value="Guitar"
              checked={instrument === "Guitar"}
              onChange={(e) => {
                setInstrument(e.target.value);
              }}
            />
            Guitar
          </label>
          <label htmlFor="instrument">
            <input
              type="radio"
              name="instrument"
              id="instrument"
              value="Piano"
              checked={instrument === "Piano"}
              onChange={(e) => {
                setInstrument(e.target.value);
              }}
            />
            Piano
          </label>
          <label htmlFor="instrument">
            <input
              type="radio"
              name="instrument"
              id="instrument"
              value="Voice"
              checked={instrument === "Voice"}
              onChange={(e) => {
                setInstrument(e.target.value);
              }}
            />
            Voice
          </label>
          <br></br>
          <button class="button" onClick={updateBooking}>
            <p class="links">Edit Booking</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default MyBookings;
