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
      {prices.length > 0 && (
        <ul>
          {prices.map((price) => (
            <li key={price.id}>
              {price.instrument}
              {price.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AsyncAwait;
