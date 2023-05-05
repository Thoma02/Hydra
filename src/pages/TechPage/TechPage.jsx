import React from "react";
import { techCompaniesLinks } from "../../utils/links";
import techImage from "../../assets/images/tech_image.svg";
import "./TechPage.scss";

export default function TechPage() {

    return (
        <div className="tech-page-container">
            <img className="banner" src={techImage} alt="" />
            <div className="tech-title-container">
                <h1>TECHNOLOGIES & HARDWARE</h1>
                <h2>USED BY HYDRA VR.</h2>
            </div>
            <div className={`tech-boxes-container`}>
                {techCompaniesLinks.map((link, index) => (
                    <a href={link.url} target="blank"><img src={link.img} alt={link.label}/></a>
                ))}
            </div>
        </div>
    )
}