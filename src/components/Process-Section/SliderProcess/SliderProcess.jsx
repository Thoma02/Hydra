import React from "react";
import { slidesProcess } from "../../../utils/slides";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import randomKey from "../../../utils/randomKey";

SwiperCore.use([Navigation]);

export default function SliderProcess() {
        
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
            className="slider-services"
        >
            {slidesProcess.map((slide) => (
                <SwiperSlide className={`swiper-slide vive`} key={randomKey()}>
                    <div className="process-box">
                        <div className="process-circle">{slide.stepNumber}</div>
                        <div className="process-box-info">
                            <h3>{slide.title}</h3>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </Swiper>
    )
}