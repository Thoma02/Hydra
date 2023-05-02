import React from "react";
import Introduction from "./Introduction/Introduction";
import AboutHydra from "./AboutHydra/AboutHydra";
import "./About.scss";

export default function About() {
    return (
        <div className="about-container">
            <Introduction />
            <AboutHydra />
        </div>
    )
}