import React from "react";
import logo from "../../assets/icons/Frame.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import vector6 from "../../assets/vectors/vector-6.svg";
import vector7 from "../../assets/vectors/vector-7.svg";
import "./Footer.scss";

export default function Footer() {

    const footerLinks1 = [
        {url: "about", label: "ABOUT"},
        {url: "services", label: "SERVICES"},
        {url: "tech", label: "TECHNOLOGIES"},
        {url: "process", label: "HOW TO"},
        {url: "", label: "JOIN HYDRA"},
    ];

    const footerLinks2 = [
        {url: "", label: "F.A.Q"},
        {url: "", label: "SITEMAP"},
        {url: "", label: "CONDITIONS"},
        {url: "", label: "LICENSES"},
    ];

    const footerMediaLinks = [
        {url: "https://facebook.com", label: facebook},
        {url: "https://twitter.com/", label: twitter},
        {url: "https://www.linkedin.com/", label: linkedin},
        {url: "https://www.youtube.com/", label: youtube},
        {url: "https://www.instagram.com/", label: instagram},
        {url: "https://www.pinterest.de/", label: pinterest},
    ];

    return (
        <div className="footer-parent-container">
            <div className="footer-container">
                <img src={logo} alt="" />
                <div className="footer-divider"></div>
                <div className="footer-links-container">
                    {footerLinks1.map((link, index) => (
                        <a key={index} href={link.url} target="blank">{link.label}</a>
                    ))}
                </div>
                <div className="footer-divider"></div>
                <div className="footer-links-container">
                    {footerLinks2.map((link, index) => (
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
                        {/* <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={youtube} alt="" />
                        <img src={instagram} alt="" />
                        <img src={pinterest} alt="" /> */}
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