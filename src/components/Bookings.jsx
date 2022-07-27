import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const Bookings = () => {
    // const {store, dispatch} = useGlobalState()
    const {store} = useGlobalState()
    const {loggedInUser} = store

    return (
        <>
            <h2>Bookings</h2>
            <p>Developer note: The current user is:</p>
            { loggedInUser && <p>{loggedInUser}</p> }
            <Link to="/bookings/new">Make new booking</Link>
            <h3>Upcoming and past bookings</h3>
            <p>Developer note: display bookings</p>
        </>
    )
}

export default Bookings