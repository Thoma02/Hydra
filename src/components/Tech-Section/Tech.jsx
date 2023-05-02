import React, {useState, useEffect} from "react";
import techImage from "../../assets/images/tech_image.svg";
import unreal from "../../assets/icons/unreal.svg";
import unity from "../../assets/icons/unity.svg";
import oculus from "../../assets/icons/oculus.svg";
import vive from "../../assets/icons/vive.svg";
import techImageMobile from "../../assets/images/tech_image_mobile.svg";
import "./Tech.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

export default function Tech() {

    const [displayed, setDisplayed] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => {
        setDisplayed(!displayed);
    }

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

      window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="tech-container">
            <div className="tech-main-container">
                <img src={isMobile ? techImageMobile : techImage} alt="" />
                <div className="tech-title-container">
                    <h1>TECHNOLOGIES & HARDWARE</h1>
                    <h2>USED BY HYDRA VR.</h2>
                </div>
                <div className="tech-button" onClick={handleClick}>
                    <div className={`tech-arrow-left ${displayed ? '' : 'rotate-left'}`}></div>
                    <div className={`tech-arrow-right ${displayed ? '' : 'rotate-right'}`}></div>
                </div>
            </div>
            <div className={`tech-boxes-container ${displayed ? '' : 'hidden'}`}>
                <a href="https://www.unrealengine.com/en-US" target="blank"><img src={unreal} alt="" /></a>
                <a href="https://unity.com/" target="blank"><img src={unity} alt="" /></a>
                <a href="https://www.oculus.com/experiences/quest/" target="blank"><img src={oculus} alt="" /></a>
                <a href="https://www.vive.com/de/" target="blank"><img src={vive} alt="" /></a>
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
                <SwiperSlide className={`swiper-slide unreal`}>
                    <img src={unreal} alt="" />
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide unity`}>
                    <img src={unity} alt="" />
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide oculus`}>
                    <img src={oculus} alt="" />
                </SwiperSlide>
                <SwiperSlide className={`swiper-slide vive`}>
                    <img src={vive} alt="" />
                </SwiperSlide>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
        </div>
    )
}