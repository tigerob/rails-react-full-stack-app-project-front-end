import React from 'react';
import { useGlobalState } from "../utils/stateContext";

const Bookings = () => {
    // const {store, dispatch} = useGlobalState()
    const {store} = useGlobalState()
    const {loggedInUser} = store

    return (
        <>
            <h2>Bookings</h2>
            <p>The current user is:</p>
            { loggedInUser && <p>{loggedInUser}</p> }
        </>
    )
}

export default Bookings