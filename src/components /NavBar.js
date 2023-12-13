import React from 'react';
import { AddressBook, BeerBottle, ShoppingCart } from "phosphor-react";
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



