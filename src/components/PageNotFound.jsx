import React from 'react';
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
            <p>404 Error - Page not found</p>
            <Link to='/'>Back to home</Link>
        </>
    )
}

export default PageNotFound