// App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components /NavBar';
import Cart from './components /Cart';
import Shop from './components /Shop';
import Contacts from './components /Contacts';
import { CartProvider } from './components /CartContext';
import Checkout from './components /Checkout.js';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1 className="Heading">LIQUOR WORLD</h1>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/Contacts">
            <Contacts />
          </Route>
          <Route exact path="/Checkout">
            <Checkout/>
          </Route>
        </Switch>
      </div>
    </CartProvider>
  );
}

export default App;
