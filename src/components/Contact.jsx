import React, { useState } from "react";
import axios from "axios";
import image from "../assets/mv2.gif";

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xbjbravy",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thank you for your message!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <>
      <h1 class="title">Contact Mia</h1>
      <div class="image">
        <img src={image} alt="music" />
      </div>
      <h2 class="info-head">Please Submit A Form</h2>{" "}
      <div class="info">
        <form class="form" onSubmit={handleOnSubmit}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="10"></textarea>
          <button
            class="button"
            type="submit"
            disabled={serverState.submitting}
          >
            <p class="links">Submit</p>
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
