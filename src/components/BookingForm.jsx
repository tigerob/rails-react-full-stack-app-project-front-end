import React, { useState, useEffect } from "react";
import { useGlobalState } from "../utils/stateContext";
import { createBooking } from "../services/bookingsServices";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  const initialFormData = {
    username: `${loggedInUser}`,
    time: "",
    date: "",
    location: "",
    instrument: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [bookings, setBookings] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://mia-music-studios-api.herokuapp.com/bookings");
    const data = await response.json();
    setBookings(data);
  };

  const timeOptions = [
    { value: "09:00", label: "9:00 am" },
    { value: "10:00", label: "10:00 am" },
    { value: "11:00", label: "11:00 am" },
    { value: "12:00", label: "12:00 pm" },
    { value: "13:00", label: "1:00 pm" },
    { value: "14:00", label: "2:00 pm" },
    { value: "15:00", label: "3:00 pm" },
    { value: "16:00", label: "4:00 pm" },
    { value: "17:00", label: "5:00 pm" },
  ];

  const bookingTimes = bookings.filter((booking) => {
    return booking.date === formData.date;
  });

  const Times = bookingTimes.map((booking) => {
    return booking.time;
  });
  const timesOptionsfiltered = timeOptions.filter((time) => {
    return !Times.includes(time.value);
  });

  const isWeekday = (date) => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      addBooking(formData);
      window.location.reload();
      window.location.href = "/accounts/mybookings";
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
    });
  };

  return (
    <>
      <div className="About">
        <h1 class="title">Booking Form</h1>
      </div>
      <div class="form-style-5">
        <>
          <p class="info">{`This booking is for ${loggedInUser}`}</p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="hidden"
                name="username"
                id="username"
                value={loggedInUser}
                onChange={handleFormData}
                placeholder="Choose a time"
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <DatePicker
                id="date"
                selected={startDate}
                placeholderText="Select a weekday"
                onChange={(date) => {
                  setStartDate(date);
                  setFormData({
                    ...formData,
                    date: date.toString().slice(0, 15),
                  });
                }}
                filterDate={(date) => isWeekday(date)}
              />
            </div>
            <div>
              <br></br>
              <label htmlFor="time">Time:</label>
              <Select
                isDisabled={true && !startDate}
                defultValue={selectedOption}
                options={timesOptionsfiltered}
                placeholder="Choose a time"
                onChange={(selectedOption) => {
                  setSelectedOption(selectedOption);
                  setFormData({
                    ...formData,
                    time: selectedOption.value,
                  });
                }}
              />
            </div>
            <div>
              <br></br>
              <label>Location:</label>
              <label htmlFor="location">
                <input
                  type="radio"
                  name="location"
                  id="location"
                  value="Studio"
                  onChange={handleFormData}
                />
                Studio
              </label>
              <label htmlFor="location">
                <input
                  type="radio"
                  name="location"
                  id="location"
                  value="Online"
                  onChange={handleFormData}
                />
                Online
              </label>
            </div>
            <div>
              <br></br>
              <label>Instrument:</label>
              <label htmlFor="instrument">
                <input
                  type="radio"
                  name="instrument"
                  id="instrument"
                  value="Guitar"
                  onChange={handleFormData}
                />
                Guitar
              </label>
              <label htmlFor="instrument">
                <input
                  type="radio"
                  name="instrument"
                  id="instrument"
                  value="Piano"
                  onChange={handleFormData}
                />
                Piano
              </label>
              <label htmlFor="instrument">
                <input
                  type="radio"
                  name="instrument"
                  id="instrument"
                  value="Voice"
                  onChange={handleFormData}
                />
                Voice
              </label>
            </div>
            <button class="button">
              <input type="submit" value="Make booking" />
            </button>
          </form>
        </>
      </div>
    </>
  );
};

export default BookingForm;
