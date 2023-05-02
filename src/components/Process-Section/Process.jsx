import React from "react";
import "./Process.scss";
import arrow from "../../assets/icons/arrow-small-right.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

export default function Process() {
    return(
        <div className="process-container">
            <div className="why_build_with_hydra_container">
                <div className="title_container">
                    <h1>HOW WE BUILD</h1>
                    <div className="subtitle_container">
                        <h2>WITH HYDRA VR?</h2>
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
            <div className="process-boxes-container">
                <div className="process-box">
                    <div className="process-circle">01</div>
                    <div className="process-box-info">
                        <img src={arrow} alt="" />
                        <h3>3D Conception & Design</h3>
                    </div>
                </div>
                <div className="process-box">
                    <div className="process-circle">02</div>
                    <div className="process-box-info">
                        <img src={arrow} alt="" />
                        <h3>Interaction Design</h3>
                    </div>
                </div>
                <div className="process-box">
                    <div className="process-circle">03</div>
                    <div className="process-box-info">
                        <img src={arrow} alt="" />
                        <h3>VR World User Testing</h3>
                    </div>
                </div>
                <div className="process-box">
                    <div className="process-circle">04</div>
                    <div className="process-box-info">
                        <img src={arrow} alt="" />
                        <h3>Hydra VR Deploy</h3>
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
                <SwiperSlide className={`swiper-slide unreal`}>
                    <div className="process-box">
                        <div className="process-circle">01</div>
                        <div className="process-box-info">
                            <h3>3D Conception & Design</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide unity`}>
                    <div className="process-box">
                        <div className="process-circle">02</div>
                        <div className="process-box-info">
                            <h3>Interaction Design</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide oculus`}>
                    <div className="process-box">
                        <div className="process-circle">03</div>
                        <div className="process-box-info">
                            <h3>VR World User Testing</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide vive`}>
                    <div className="process-box">
                        <div className="process-circle">04</div>
                        <div className="process-box-info">
                            <h3>Hydra VR Deploy</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
        </div>
    )
}