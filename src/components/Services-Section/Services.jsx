import React from "react";
import "./Services.scss";
import shadow from "../../assets/icons/shadow.svg";
import simulationImg from "../../assets/images/simulation.svg";
import educationImg from "../../assets/images/education.svg";
import selfCareImg from "../../assets/images/self_care.svg";
import outdoorImg from "../../assets/images/outdoor.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

export default function Services() {
    return (
        <div className="services_container">
            <div className="why_build_with_hydra_container">
                <div className="title_container">
                    <h1>WHY BUILD</h1>
                    <div className="subtitle_container">
                        <h2>WITH HYDRA</h2>
                        <div className="arrow_container">
                            <div className="arrow_top"></div>
                            <div className="arrow_mid"></div>
                            <div className="arrow_bottom"></div>
                        </div>
                    </div>
                </div>
                <div className="text_container">
                    <p>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
            <div className="boxes_container">
                <div className="box_container">
                    <img className="shadow" src={shadow} alt="" />
                    <img className="box_image" src={simulationImg} alt="" />
                    <div className="box_text_container">
                         <h3>SIMULATION</h3>
                        <div className="box_divider"></div>
                        <p>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.
                        </p>
                        <button>TRY IT NOW</button>
                    </div>
                </div>
                <div className="box_container">
                    <img className="shadow" src={shadow} alt="" />
                    <img className="box_image" src={educationImg} alt="" />
                    <div className="box_text_container">
                         <h3>SIMULATION</h3>
                        <div className="box_divider"></div>
                        <p>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.
                        </p>
                        <button>TRY IT NOW</button>
                    </div>
                </div>
                <div className="box_container">
                    <img className="shadow" src={shadow} alt="" />
                    <img className="box_image" src={selfCareImg} alt="" />
                    <div className="box_text_container">
                         <h3>SIMULATION</h3>
                        <div className="box_divider"></div>
                        <p>
                            Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus 
                            libero justo laoreet sit amet vitae.
                        </p>
                        <button>TRY IT NOW</button>
                    </div>
                </div>
                <div className="box_container">
                    <img className="shadow" src={shadow} alt="" />
                    <img className="box_image" src={outdoorImg} alt="" />
                   <div className="box_text_container">
                         <h3>SIMULATION</h3>
                        <div className="box_divider"></div>
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
                className="slider_services"
                >
                <SwiperSlide className={`swiper-slide`}>
                    <div className="box_container">
                        <img className="shadow" src={shadow} alt="" />
                        <img className="box_image" src={simulationImg} alt="" />
                        <div className="box_text_container">
                            <h3>SIMULATION</h3>
                            <div className="box_divider"></div>
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
                    <div className="box_container">
                        <img className="shadow" src={shadow} alt="" />
                        <img className="box_image" src={selfCareImg} alt="" />
                        <div className="box_text_container">
                            <h3>SIMULATION</h3>
                            <div className="box_divider"></div>
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
                    <div className="box_container">
                        <img className="shadow" src={shadow} alt="" />
                        <img className="box_image" src={outdoorImg} alt="" />
                    <div className="box_text_container">
                            <h3>SIMULATION</h3>
                            <div className="box_divider"></div>
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
        </div>
    )
}