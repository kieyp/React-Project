// Shop.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Shop() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulating fetching data from an API
    fetch('https://liquer-world-sdf.onrender.com/Stock')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="shop-container">
      {loading && <p className="loading-message">Loading...</p>}
      {error && (
        <div>
          <p className="error-message">{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}
      {data.map(item => (
        <div key={item.id} className="shop-item">
          <img src={item.Image} alt={item.Name} className="item-image" />
          <p className="item-name">Name: {item.Name}</p>
          <p className="item-description">Description: {item.Description}</p>
          <p className="item-price">Price: {item.Price} Ksh</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
      {/* Floating Cart Icon */}
      <div className="floating-cart-icon">
        <Link to="/Cart">🛒</Link>
      </div>
    </div>
  );
}

export default Shop;
