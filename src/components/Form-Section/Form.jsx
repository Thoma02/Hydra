import React from "react";
import './Form.scss';

export default function Form() {

    return (
        <div className="form-container">
            <h1>JOIN HYDRA</h1>
            <div className="form-divider"></div>
            <h2>Let’s Build Your VR Experience</h2>
            <div className="form-input-container">
                <div className="input-container">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="input-container">
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Phone Number" />
                </div>
                <input className="subject" type="text" placeholder="Subject" />
                <textarea name="message-box" id="message-box" placeholder="Tell Us Something..."></textarea>
                <input className="submit" type="submit" value="SEND TO HYDRA" />
            </div>
        </div>
    )
}