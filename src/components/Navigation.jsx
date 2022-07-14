import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav class="nav">
            <Link to='/'>Home</Link>
            <Link to='/bookings'>Bookings</Link>
            <Link to='/prices'>Prices</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Log in</Link>
            <Link to='/signup'>Sign up</Link>
        </nav>
    )
}

export default Navigation