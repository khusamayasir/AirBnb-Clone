import React from "react" 
import AirBnbLogo from "../images/AirBnb Logo.png"


export default function Navbar() {
    return (
        <nav>
            <img src={AirBnbLogo}
            alt="AirBnb Logo" 
            className="nav-logo" />
        </nav>
    )
}