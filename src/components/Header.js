import { useEffect, useState } from "react";
import { CDN_LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact,setBtnNameReact] = useState("Login");
    console.log("header rendered");

    useEffect(() => {
        console.log("useeffect rendered")
    },[])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_LOGO}></img>
            </div>
            <div className="nav-item">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li>
                    <Link to="/contact">Contact Us</Link></li> 
                <li>Cart</li>
                <button className="login" onClick={() => {
                    btnNameReact == "Login"
                     ? setBtnNameReact("Logout")
                     : setBtnNameReact("Login");
                    
                }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;