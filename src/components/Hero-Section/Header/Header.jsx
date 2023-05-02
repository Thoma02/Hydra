import React from "react";
import arrow from "../../../assets/icons/arrow-small-right.svg";
import image from "../../../assets/images/hero-image.png";
import vectorCluster from "../../../assets/vectors/vector-cluster.png";
import vector1 from "../../../assets/vectors/vector-1.svg";

export default function Header() {
    return (
        <div id="header-container">
            <div id="text-container">
                <h1><span>Dive </span>Into The Depths Of <span>Virtual Reality</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    nisl tincidunt eget. Lectus mauris eros in vitae .
                </p>
                <div id="buttons-container">
                    <button>BUILD YOUR WORLD</button>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div id="image-container">
                <img src={image} alt="" />
            </div>
            <img className="vector-cluster" src={vectorCluster} alt="" />
            <img className="vector-1" src={vector1} alt="" />
        </div>
    )
}