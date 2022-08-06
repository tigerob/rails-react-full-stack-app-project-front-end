import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/mv2.gif";

const PageNotFound = () => {
  return (
    <>
      <p class="text">404 Error - Page not found</p>
      <div class="image">
        <img src={image} alt="music" />
      </div>
      <Link to="/" class="text">
        Back to home
      </Link>
    </>
  );
};

export default PageNotFound;
