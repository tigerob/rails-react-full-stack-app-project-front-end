import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
        submitting: false,
        status: { ok, msg }
        });
        if (ok) {
        form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
        method: "post",
        url: "https://formspree.io/f/xbjbravy",
        data: new FormData(form)
        })
        .then(r => {
            handleServerResponse(true, "Thank you for your message!", form);
        })
        .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
        <>
            <h1 class="title">Contact Mia</h1>
            <form class="form" onSubmit={handleOnSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="10"></textarea>
                <button type="submit" disabled={serverState.submitting}>
                Submit
                </button>
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                    </p>
                )}
            </form>
        </>
    );
};

export default Contact