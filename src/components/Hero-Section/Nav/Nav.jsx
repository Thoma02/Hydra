import React, { useState } from "react";
import { navSiteLinks } from "../../../utils/links";
import logo from "../../../assets/icons/Frame.svg";
import group from "../../../assets/icons/Group.svg";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import randomKey from "../../../utils/randomKey";

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
                {navSiteLinks.map((link) => (
                    <a key={randomKey()} href={link.url}>{link.label}</a>
                ))}
            </div>
            <div className="buttons-container">
                <button className="contact-us-button">CONTACT US</button>
                <button className="join-hydra-button">JOIN HYDRA</button>
            </div>
            <div onClick={handleClick} className={`burger-menu ${clicked ? 'clicked' : ''}`}>
                <div className="line top"></div>
                <div className="line middle"></div>
                <div className="line bottom"></div>
            </div>
            <DropdownMenu clicked={clicked}/>
        </div>
    );
}