import React from "react";
import GridImage from "../images/Group Picture.png"

export default function Hero() {
    return(
        <section className="hero">
            <img src= {GridImage}
            alt= "Grid Image"
            className="grid-image" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}