import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import location from "../../../assets/icons/location.svg";
import phone from "../../../assets/icons/phone.svg";
import mail from "../../../assets/icons/mail.svg";
import "./SliderDef.scss";

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
                <SwiperSlide className={`swiper-slide`}>
                    <div className="contact-container">
                        <img src={location} alt="" />
                        <div className="info-container">
                            <h2>Pay Us a Visit</h2>
                            <p>Union St, Seattle, WA 98101, United States</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide`}>
                    <div className="contact-container">
                        <img src={phone} alt="" />
                        <div className="info-container">
                            <h2>Give Us a Call</h2>
                            <p>(110) 1111-1010</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide`}>
                    <div className="contact-container">
                        <img src={mail} alt="" />
                        <div className="info-container">
                            <h2>Send Us a Message</h2>
                            <p>Contact@HydraVTech.com</p>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
    )
}