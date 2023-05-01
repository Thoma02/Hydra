import React from "react";
import "./Introduction.scss";

export default function Introduction() {
    return (
        <div className="introduction_container">
            <div className="title_container">
                <h1>Introduction</h1>
                <div className="subtitle_container">
                    <h2>TO HYDRA VR</h2>
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
    )
}