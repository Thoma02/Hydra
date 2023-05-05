import React from "react";
import { footerSiteLinks1, footerSiteLinks2, footerMediaLinks } from "../../utils/links";
import logo from "../../assets/icons/Frame.svg";
import vector6 from "../../assets/vectors/vector-6.svg";
import vector7 from "../../assets/vectors/vector-7.svg";
import "./Footer.scss";

export default function Footer() {

    return (
        <div className="footer-parent-container">
            <div className="footer-container">
                <img src={logo} alt="" />
                <div className="footer-divider"></div>
                <div className="footer-links-container">
                    {footerSiteLinks1.map((link, index) => (
                        <a key={index} href={link.url} target="blank">{link.label}</a>
                    ))}
                </div>
                <div className="footer-divider"></div>
                <div className="footer-links-container">
                    {footerSiteLinks2.map((link, index) => (
                        <a key={index} href={link.url}>{link.label}</a>
                    ))}
                </div>
                <div className="footer-divider"></div>
                <div className="footer-socialize-container">
                    <p>SOCIALIZE WITH HYDRA</p>
                    <div className="footer-media-links-container">
                        {footerMediaLinks.map((link, index) => (
                            <a key={index} href={link.url}><img src={link.label} alt={link.label} /></a>
                        ))}
                    </div>
                    <button>BUILD YOUR WORLD</button>
                </div>
            </div>
            <div className="footer-copyrights-divider"></div>
            <div className="copyrights-container">
                <p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
            </div>
            <img className="vector-6" src={vector6} alt="" />
            <img className="vector-7" src={vector7} alt="" />
        </div>
    )
}