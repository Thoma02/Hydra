import React from "react";
import SliderContactUs from "./SliderContactUs/SliderContactUs";
import { slidesContactUs } from "../../../utils/slides";
import randomKey from "../../../utils/randomKey";
import 'swiper/swiper-bundle.css';

export default function ContactUs() {

    return (
        <div id="contact-us-parent-container">
            <div id="contact-us-child-container">
                {slidesContactUs.map((slide) => (
                    <div className="contact-container" key={randomKey()}>
                        <img src={slide.image} alt={slide.imageDescription} />
                        <div className="info-container">
                            <h2>{slide.title}</h2>
                            <p>{slide.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SliderContactUs />
        </div>
    )
}