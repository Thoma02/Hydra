import React, { useState } from "react";
import logo from "../../../assets/icons/Frame.svg";
import group from "../../../assets/icons/Group.svg";
import "./Nav.scss";

export default function Nav() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div id="nav-container">
            <div id="logo-container">
                <img src={logo} alt="Hydra Logo"/>
                <img src={group} alt="" />
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
            <div onClick={handleClick} className={`burger-menu ${clicked ? 'clicked' : ''}`}>
                <div class="line top"></div>
                <div class="line middle"></div>
                <div class="line bottom"></div>
            </div>
            <div className={`dropdown ${clicked ? 'visible' : 'hidden'}`}>
                <div className="nav-links-container-mobile">
                    <a href="#about-container">ABOUT</a>
                    <a href="#services-container">SERVICES</a>
                    <a href="#technologies-container">TECHNOLOGIES</a>
                    <a href="#process-container">HOW TO</a>
                </div>
                <div className="buttons-container-mobile">
                    <button className="contact-us-button">CONTACT US</button>
                    <button className="join-hydra-button">JOIN HYDRA</button>
                </div>
            </div>
        </div>
    );
}