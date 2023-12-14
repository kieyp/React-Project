// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import { Link, useHistory } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart } = useCart();
  const history = useHistory();

  const total = cart.reduce((acc, item) => acc + parseFloat(item.Price), 0);

  const handleCheckout = () => {
    // Redirect to the checkout page
    history.push('/checkout');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.Image} alt={item.Name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.Name}</p>
                <p className="cart-item-price">Price: {item.Price} Ksh</p>
                <button onClick={() => removeFromCart(item.id)} className="cart-item-remove-btn">
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
          <p className="cart-total">Total: {total.toFixed(2)} Ksh</p>
          <div className="cart-buttons">
            <button onClick={handleCheckout} className="checkout-btn">
              Checkout
            </button>
          </div>
          <Link to="/" className="back-to-shop-btn">
            Back to Shop
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
