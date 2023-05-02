import React from "react";
import AboutHydra from "../../components/About-Section/AboutHydra/AboutHydra";
import vector2 from "../../assets/vectors/vector-2.svg";
import vector3 from "../../assets/vectors/vector-3.svg";
import HydraImg from "../../assets/images/about_image.svg";
import "./AboutPage.scss";

export default function About() {
    return (
        <div className="about-page">
            <h1>ABOUT</h1>
            <h2>HYDRA VR</h2>
            <div className="about-hydra-container">
                <img src={HydraImg} alt="" />
                <div className="about-text-container">
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
                <img className="vector-2" src={vector2} alt="" />
                <img className="vector-3" src={vector3} alt="" />
            </div>
        </div>
    )
}
