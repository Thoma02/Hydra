import React from "react";
import "./Services.scss";
import shadow from "../../assets/icons/shadow.svg";
import simulationImg from "../../assets/images/simulation.svg";
import educationImg from "../../assets/images/education.svg";
import selfCareImg from "../../assets/images/self-care.svg";
import outdoorImg from "../../assets/images/outdoor.svg";
import vector4 from "../../assets/vectors/vector-4.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

export default function Services() {
    return (
        <div className="services-container">
            <div className="why-build-with-hydra-container">
                <div className="title-container">
                    <h1>WHY BUILD</h1>
                    <div className="subtitle-container">
                        <h2>WITH HYDRA</h2>
                        <div className="arrow-container">
                            <div className="arrow-top"></div>
                            <div className="arrow-mid"></div>
                            <div className="arrow-bottom"></div>
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <p>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
            <div className="boxes-container">
                <div className="box-container">
                    <img className="shadow" src={shadow} alt="" />
                    <img className="box-image" src={simulationImg} alt="" />
                    <div className="box-text-container">
                         <h3>SIMULATION</h3>
                        <div className="box-divider"></div>
                        <p>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.
                        </p>
                        <button>TRY IT NOW</button>
                    </div>
                </div>
                <div className="box-container">
                    <img className="shadow" src={shadow} alt="" />
                    <img className="box-image" src={educationImg} alt="" />
                    <div className="box-text-container">
                         <h3>EDUCATION</h3>
                        <div className="box-divider"></div>
                        <p>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.
                        </p>
                        <button>TRY IT NOW</button>
                    </div>
                </div>
                <div className="box-container">
                    <img className="shadow" src={shadow} alt="" />
                    <img className="box-image" src={selfCareImg} alt="" />
                    <div className="box-text-container">
                         <h3>SELF-CARE</h3>
                        <div className="box-divider"></div>
                        <p>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.
                        </p>
                        <button>TRY IT NOW</button>
                    </div>
                </div>
                <div className="box-container">
                    <img className="shadow" src={shadow} alt="" />
                    <img className="box-image" src={outdoorImg} alt="" />
                   <div className="box-text-container">
                         <h3>OUTDOOR</h3>
                        <div className="box-divider"></div>
                        <p>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.
                        </p>
                        <button>TRY IT NOW</button>
                    </div>
                </div>
            </div>
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
                <SwiperSlide className={`swiper-slide`}>
                    <div className="box-container">
                        <img className="shadow" src={shadow} alt="" />
                        <img className="box-image" src={simulationImg} alt="" />
                        <div className="box-text-container">
                            <h3>SIMULATION</h3>
                            <div className="box-divider"></div>
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide`}>
                    <div className="box-container">
                        <img className="shadow" src={shadow} alt="" />
                        <img className="box-image" src={selfCareImg} alt="" />
                        <div className="box-text-container">
                            <h3>EDUCATION</h3>
                            <div className="box-divider"></div>
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide`}>
                    <div className="box-container">
                        <img className="shadow" src={shadow} alt="" />
                        <img className="box-image" src={outdoorImg} alt="" />
                    <div className="box-text-container">
                            <h3>SELF-CARE</h3>
                            <div className="box-divider"></div>
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide`}>
                    <div className="box-container">
                        <img className="shadow" src={shadow} alt="" />
                        <img className="box-image" src={outdoorImg} alt="" />
                    <div className="box-text-container">
                            <h3>OUTDOOR</h3>
                            <div className="box-divider"></div>
                            <p>
                                Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
            <img className="vector-4" src={vector4} alt="" />
        </div>
    )
}