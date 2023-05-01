import React from "react";
import "./AboutHydra.scss";
import HydraImg from "../../../assets/images/about_image.svg";

export default function AboutHydra() {
    return (
        <div className="about_hydra_container">
            <img src={HydraImg} alt="" />
            <div className="about_text_container">
                <h1>ABOUT</h1>
                <h2>HYDRA VR</h2>
                <p>
                    Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                    urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                    dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                    Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                    sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                    etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                    cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                    retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                    n tempor.
                </p>
                <button>LET’S GET IN TOUCH</button>
            </div>
        </div>
    )
}