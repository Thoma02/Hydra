import React from "react";
import simulationImg from "../../assets/images/simulation.svg";
import educationImg from "../../assets/images/education.svg";
import selfCareImg from "../../assets/images/self-care.svg";
import outdoorImg from "../../assets/images/outdoor.svg";
import "./ServicesPage.scss";

export default function ServicesPage() {


    return (
        <div className="services-page-container">
                <div className="why-build-with-hydra-container">
                    <div className="title-container">
                        <h1>WHY BUILD</h1>
                        <h2>WITH HYDRA</h2>
                    </div>
                </div>
                <div className="boxes-container">
                    <div className="box-container">
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
        </div>
    )
}