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
    alert("Price updated");
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
            <table class="styled-table">
              <tr>
                <th>Instrument</th>
                <th>Current Price</th>
                <th>Operations</th>
              </tr>
              <tbody>
                {prices.map((price) => (
                  <tr>
                    <td>{price.instrument.toUpperCase()}</td>
                    <td>
                      {price.price.toLocaleString("en-AU", {
                        style: "currency",
                        currency: "AUD",
                      })}
                    </td>
                    <td>
                      <button
                        onClick={() => selectPrice(price.id)}
                        class="button"
                      >
                        <p class="links">Edit</p>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table class="styled-table">
              <div class="center">
                <h2>Update Price</h2>
                <tbody>
                  <input type="hidden" value={id} />
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                  <div>
                    <button onClick={updatePrice} class="button">
                      <p class="links">Update Price</p>
                    </button>
                  </div>
                </tbody>
              </div>
            </table>
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
          <table class="styled-table">
            <tr>
              <th>Instrument</th>
              <th>Current Price</th>
            </tr>
            <tbody>
              {prices.map((price) => (
                <tr>
                  <td>{price.instrument.toUpperCase()}</td>
                  <td>
                    {price.price.toLocaleString("en-AU", {
                      style: "currency",
                      currency: "AUD",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div>
          <button class="button">
            <Link to="/bookings">
              <p class="links">Book Now</p>
            </Link>
          </button>
        </div>
      </div>
    );
  }
};

export default AsyncAwait;
