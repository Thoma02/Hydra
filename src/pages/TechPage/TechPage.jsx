import React from "react";
import techImage from "../../assets/images/tech_image.svg";
import unreal from "../../assets/icons/unreal.svg";
import unity from "../../assets/icons/unity.svg";
import oculus from "../../assets/icons/oculus.svg";
import vive from "../../assets/icons/vive.svg";
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
                <a href="https://www.unrealengine.com/en-US" target="blank"><img src={unreal} alt="" /></a>
                <a href="https://unity.com/" target="blank"><img src={unity} alt="" /></a>
                <a href="https://www.oculus.com/experiences/quest/" target="blank"><img src={oculus} alt="" /></a>
                <a href="https://www.vive.com/de/" target="blank"><img src={vive} alt="" /></a>
            </div>
        </div>
    )
}