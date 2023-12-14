import React, { useEffect, useState } from 'react';

function Shop() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/Stock")
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      });
  }, []);

  return (
    <div className="shop-container"> {/* Add the className here */}
      {error && <p className="error-message">{error}</p>}
      {data.map(item => (
        <div key={item.id} className="shop-item"> {/* Add the className here */}

        <img src={item.Image} />
          <p>Name: {item.Name}</p>
          <p>Description: {item.Description}</p>

          <p>Price: {item.Price} Ksh</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
}

export default Shop;