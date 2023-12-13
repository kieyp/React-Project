import React from 'react';
// import { Link } from 'react-router-dom';
import { AddressBook, BeerBottle, ShoppingCart } from "phosphor-react";
// import { Cart } from "./Cart";
// import { Contacts } from "./Contacts";
import { NavLink } from "react-router-dom";
import "../Styling/NavBar.css";

function NavBar(){
    return (
        <div className="navbar">
            <div className="links">
                <NavLink
                    to="/"
                    exact
                    >
                    <BeerBottle size={40}/>
                </NavLink>
                <NavLink
                    to="/Cart"
                    exact
                    >
                    <ShoppingCart size={40}/>
                </NavLink>
                <NavLink
                    to="/Contacts"
                    exact
                    >
                        <AddressBook size={40}/>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;



