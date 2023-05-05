import React from "react";
import { navSiteLinks } from "../../../../utils/links";

export default function DropdownMenu({ clicked }) {

    return (
        <div className={`dropdown ${clicked ? 'visible' : 'hidden'}`}>
            <div className="nav-links-container-mobile">
                {navSiteLinks.map((link) => (
                    <a href={link.url}>{link.label}</a>
                ))}
            </div>
            <div className="buttons-container-mobile">
                <button className="contact-us-button">CONTACT US</button>
                <button className="join-hydra-button">JOIN HYDRA</button>
            </div>
        </div>
    )
}