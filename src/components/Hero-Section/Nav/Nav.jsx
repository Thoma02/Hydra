import React from "react";
import logo from "../../../assets/icons/Frame.svg";
import "./Nav.scss";

export default function Nav() {
    return (
        <div id="nav-container">
            <div id="logo-container">
                <img src={logo} alt="Hydra Logo"/>
                <h1>HYDRA</h1>
            </div>
            <div className="nav-links-container">
                <a href="#about-container">ABOUT</a>
                <a href="#services-container">SERVICES</a>
                <a href="#technologies-container">TECHNOLOGIES</a>
                <a href="#process-container">HOW TO</a>
            </div>
            <div className="buttons-container">
                <button className="contact-us-button">CONTACT US</button>
                <button className="join-hydra-button">JOIN HYDRA</button>
            </div>
        </div>
    );
}