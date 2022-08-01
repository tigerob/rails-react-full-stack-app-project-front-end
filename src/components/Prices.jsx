import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AsyncAwait = () => {
  const [prices, setPrices] = useState([]);
  let admin = sessionStorage.getItem("is_admin");
  const [id, setPrice_id] = useState();
  const [price, setPrice] = useState();

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/prices");
    const data = await response.json();
    setPrices(data);
  };

  function selectPrice(id) {
    const price = prices.find((price) => price.id === id);
    setPrice_id(price.id);
    setPrice(price.price);
  }
  function updatePrice() {
    let newprice = { price, id };
    fetch(`http://localhost:3000/prices/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newprice),
    });
    window.location.reload();
  }
  console.log(prices);

  useEffect(() => {
    fetchData();
  }, []);
  if (admin === "true") {
    return (
      <div>
        <div>
          <h1 class="title">Mia's Prices</h1>
        </div>
        <div class="price-info"></div>
        {prices.length > 0 && (
          <>
            <table border="1" style={{ float: "left" }}>
              <tr>
                <th>Instrument</th>
                <th>Current Price</th>
                <th>Operations</th>
              </tr>
              <tbody>
                {prices.map((price) => (
                  <tr>
                    <td>{price.instrument}</td>
                    <td>
                      {price.price.toLocaleString("en-AU", {
                        style: "currency",
                        currency: "AUD",
                      })}
                    </td>
                    <td>
                      <button onClick={() => selectPrice(price.id)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <input type="hidden" value={id} />
            <input
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <button onClick={updatePrice}> Edit Booking </button>
          </>
        )}
      </div>
    );
  } else {
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
  }
};

export default AsyncAwait;
