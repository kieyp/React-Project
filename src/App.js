import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar  from "./components /NavBar";
import Cart from "./components /Cart";
import Shop from "./components /Shop";
import Contacts from "./components /Contacts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="Heading"> LIQUOR WORLD</h1>
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
      </Switch>
    </div>
  );
}

export default App;