import React from "react";
import SliderProcess from "./SliderProcess/SliderProcess";
import vector5 from "../../assets/vectors/vector-5.svg";
import { slidesProcess } from "../../utils/slides";
import randomKey from "../../utils/randomKey";
import "./Process.scss";

export default function Process() {

    return(
        <div className="process-container">
            <div className="why-build-with-hydra-container">
                <div className="title-container">
                    <h1>HOW WE BUILD</h1>
                    <div className="subtitle-container">
                        <h2>WITH HYDRA VR?</h2>
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
            <div className="process-boxes-container">
                {slidesProcess.map((slide) => (
                    <div className="process-box" key={randomKey()}>
                        <div className="process-circle">{slide.stepNumber}</div>
                        <div className="process-box-info">
                            <img src={slide.image} alt={slide.imageDescription} />
                            <h3>{slide.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <SliderProcess />
            <img className="vector-5" src={vector5} alt="" />
        </div>
    )
}