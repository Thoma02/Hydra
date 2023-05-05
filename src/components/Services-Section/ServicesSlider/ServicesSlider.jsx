import React from "react";
import randomKey from "../../../utils/randomKey";
import shadow from "../../../assets/icons/shadow.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation]);

export default function ServicesSlider({ newsData }) {

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
                {newsData.map((news) => {
                    return news.data.slice(0, 4).map((item) => {
                        console.log(item.title);
                        return (
                            <SwiperSlide className={`swiper-slide`} key={randomKey()}>
                                <div className="box-container">
                                    <img className="shadow" src={shadow} alt="" />
                                    <img className="box-image" src={item.img_link} alt="" />
                                    <div className="box-text-container">
                                        <h3>{item.title.split(' ').slice(0, 1).toString()}</h3>
                                        <div className="box-divider"></div>
                                        <p>{item.title}</p>
                                        <button>TRY IT NOW</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    });
                })}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
    )
}