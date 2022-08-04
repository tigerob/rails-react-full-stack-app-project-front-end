import React from 'react';
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
            <p class="text">404 Error - Page not found</p>
            <Link to='/' class="text">Back to home</Link>
        </>
    )
}

export default PageNotFound