import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AsyncAwait = () => {
  const [prices, setPrices] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/prices");
    const data = await response.json();
    setPrices(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 class="title">Mia's Prices</h1>
      </div>
      <div class="price-info"></div>
      {prices.length > 0 && (
        <ul>
          {prices.map((price) => (
            <li class="info-list" key={price.id}>
              <h2>
                {price.instrument.toUpperCase()}
                <span> : </span>
                {price.price.toLocaleString("en-AU", {
                  style: "currency",
                  currency: "AUD",
                })}
              </h2>
            </li>
          ))}{" "}
        </ul>
      )}
      <div class="link-buttons">
        {" "}
        <Link to="/bookings" className="btn btn-primary">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default AsyncAwait;
