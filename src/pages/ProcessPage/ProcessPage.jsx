import React from "react";
import "./ProcessPage.scss";

export default function ProcessPage() {

    return (
        <div className="process-page-container">
                    <div className="process-header-container">
                        <h1>HOW WE BUILD</h1>
                        <h2>WITH HYDRA VR?</h2>
                        <p>
                            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                        </p>
                    </div>
                <div className="process-steps-container">
                    <div className="process-step-container">
                        <h3>3D Conception & Design</h3>
                        <div className="step-info">
                            <div className="process-circle left">01</div>
                            <p>At Hydra VR, we believe that great virtual reality experiences start with solid 3D conception and design. Our team of talented artists and designers will work closely with you to bring your vision to life in three dimensions. We'll help you create stunning virtual environments that are both immersive and functional, using cutting-edge tools and technologies to ensure that every detail is just right.</p>
                        </div>
                    </div>
                    <div className="process-step-container">
                            <h3>Interaction Design</h3>
                            <div className="step-info">
                                <div className="process-circle right">02</div>
                                <p>Once we've nailed down the 3D conception and design, our next step is to focus on interaction design. This involves designing the user interface and controls for your virtual reality experience, ensuring that users can navigate your world easily and intuitively. Our team of UX experts will work with you to create an interface that's simple, intuitive, and easy to use, so that your users can focus on what really matters: the immersive experience you've created.</p>
                            </div>
                    </div>
                    <div className="process-step-container">
                        <h3>VR World User Testing</h3>
                        <div className="step-info">
                            <div className="process-circle left">03</div>
                            <p>Once we've designed your virtual world, it's time to test it out with real users. Our user testing process involves recruiting real people to use your VR experience and provide feedback on everything from the visuals to the user interface to the overall immersion. We use this feedback to refine and improve your virtual reality experience, ensuring that it's as compelling and engaging as possible.</p>
                        </div>
                    </div>
                    <div className="process-step-container">
                        <h3>Hydra VR Deploy</h3>
                        <div className="step-info">
                            <div className="process-circle right">04</div>
                            <p>The final step in the Hydra VR process is to deploy your virtual reality experience to the world. Our team will work with you to ensure that your experience is accessible on a variety of platforms, from VR headsets to web browsers. We'll handle all the technical details, from server hosting to content delivery, so that you can focus on creating amazing VR experiences for your users. With Hydra VR Deploy, you can be confident that your virtual reality experience will reach a wide audience and provide an unforgettable experience.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}