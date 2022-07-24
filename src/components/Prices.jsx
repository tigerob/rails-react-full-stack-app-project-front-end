import React, { useEffect, useState } from "react";

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
        <ul class="price-info">
          {prices.map((price) => (
            <li class="info-list" key={price.id}>
              <h2>{price.instrument.toUpperCase()}</h2>
              {price.price.toLocaleString("en-AU", {
                style: "currency",
                currency: "AUD",
              })}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AsyncAwait;
