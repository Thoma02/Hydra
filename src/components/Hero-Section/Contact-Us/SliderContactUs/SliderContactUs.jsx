import React from "react";
import { slidesContactUs } from "../../../../utils/slides";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import randomKey from "../../../../utils/randomKey";
import 'swiper/swiper-bundle.css';
import "./SliderContactUs.scss";

SwiperCore.use([Navigation]);

export default function SliderDef() {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
            loop={true}
            cssMode={true}
            className="contact_slider"
        >
            {slidesContactUs.map((slide) => 
                <SwiperSlide key={randomKey()} className={`swiper-slide`}>
                    <div className="contact-container">
                        <img src={slide.image} alt={slide.imageDescription} />
                        <div className="info-container">
                            <h2>{slide.title}</h2>
                            <p>{slide.text}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </Swiper>
    )
}