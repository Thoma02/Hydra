import React from "react";
import Arrow from "../../reusable-components/Arrow/Arrow";
import "./Introduction.scss";

export default function Introduction() {
    return (
        <div className="introduction-container">
            <div className="title-container">
                <h1>Introduction</h1>
                <div className="subtitle-container">
                    <h2>TO HYDRA VR</h2>
                    <Arrow />
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
    )
}