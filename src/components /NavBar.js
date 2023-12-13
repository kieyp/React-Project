import React from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingCart } from "phosphor-react";
// import { Cart } from "./Cart";
// import { Contacts } from "./Contacts";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink
                to="/"
                exact
                >
                Shop
            </NavLink>
            <NavLink
                to="/Cart"
                exact
                >
                Cart
            </NavLink>
            <NavLink
                to="/Contacts"
                exact
                >
                    Contacts
            </NavLink>
        </div>
    )
}

export default NavBar;



