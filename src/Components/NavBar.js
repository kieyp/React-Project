import React from 'react';
import {Link} from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import { Cart } from "./Cart";
// import { Contacts } from "./Contacts";

function NavBar(){
    return (
        <div className="navbar">
            <div class ='links'>
                <Link to="/"> Shop </Link>
                <Link to="/cart"> 
                    <ShoppingCart size ={30}/> 
                </Link>
                {/* <Link to= "/contact"> <Contacts /></Link> */}
            </div>
        </div>
    )
}

export default NavBar;