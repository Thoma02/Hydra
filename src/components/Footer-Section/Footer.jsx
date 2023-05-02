import React from "react";
import logo from "../../assets/icons/Frame.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import "./Footer.scss";

export default function Footer() {

    return (
        <div className="footer-parent-container">
            <div className="footer-container">
                <img src={logo} alt="" />
                <div className="footer-divider"></div>
                <div className="footer-links-container">
                    <a href="">ABOUT</a>
                    <a href="">SERVICES</a>
                    <a href="">TECHNOLOGIES</a>
                    <a href="">HOW TO</a>
                    <a href="">JOIN HYDRA</a>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-links-container">
                    <a href="">F.A.Q</a>
                    <a href="">SITEMAP</a>
                    <a href="">CONDITIONS</a>
                    <a href="">LICENSES</a>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-socialize-container">
                    <p>SOCIALIZE WITH HYDRA</p>
                    <div className="footer-media-links-container">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={youtube} alt="" />
                        <img src={instagram} alt="" />
                        <img src={pinterest} alt="" />
                    </div>
                    <button>BUILD YOUR WORLD</button>
                </div>
            </div>
            <div className="footer-copyrights-divider"></div>
            <div className="copyrights-container">
                <p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
            </div>
        </div>
    )
}