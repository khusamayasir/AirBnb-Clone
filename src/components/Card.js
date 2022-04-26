import React from "react" 
import CardImage from "../images/Boy.png"
import StarIcon from "../images/Star.png"

export default function Card() {
    return (
    <div className="card">
        <img src= {CardImage}
        alt= "Card Image"
        className="card-image" />
        <div className="card-stats">
            <img src= {StarIcon}
            alt= "Star Icon"
            className="card-star" />
            <span className="rating">5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p>From $136 / person</p>
    </div>
    )
}
