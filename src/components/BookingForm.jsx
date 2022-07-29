import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { createBooking } from "../services/bookingsServices";

const BookingForm = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  const navigate = useNavigate();
  const initialFormData = {
    username: `${loggedInUser}`,
    time: "",
    date: "",
    location: "",
    instrument: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username === "" ||
      formData.time === "" ||
      formData.date === "" ||
      formData.location === "" ||
      formData.instrument === ""
    ) {
      alert(
        "One or more fields left blank. Please complete all fields to make booking.",
      );
    } else {
      console.log(formData);
      addBooking(formData);
    }
  };

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const addBooking = (data) => {
    createBooking(data).then((booking) => {
      dispatch({
        type: "addBooking",
        data: booking,
      });
      navigate("/bookings");
    });
  };

  return (
    <>
      <p>{`This booking is for`}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="hidden"
            name="username"
            id="username"
            value={loggedInUser}
            onChange={handleFormData}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleFormData}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleFormData}
          />
        </div>
        <div>
          <label>Location:</label>
          <label htmlFor="location">
            <input
              type="radio"
              name="location"
              id="location"
              value="studio"
              onChange={handleFormData}
            />
            Studio
          </label>
          <label htmlFor="location">
            <input
              type="radio"
              name="location"
              id="location"
              value="online"
              onChange={handleFormData}
            />
            Online
          </label>
        </div>
        <div>
          <label>Instrument:</label>
          <label htmlFor="instrument">
            <input
              type="radio"
              name="instrument"
              id="instrument"
              value="guitar"
              onChange={handleFormData}
            />
            Guitar
          </label>
          <label htmlFor="instrument">
            <input
              type="radio"
              name="instrument"
              id="instrument"
              value="piano"
              onChange={handleFormData}
            />
            Piano
          </label>
          <label htmlFor="instrument">
            <input
              type="radio"
              name="instrument"
              id="instrument"
              value="voice"
              onChange={handleFormData}
            />
            Voice
          </label>
        </div>
        <input type="submit" value="Make booking" />
      </form>
    </>
  );
};

export default BookingForm;
