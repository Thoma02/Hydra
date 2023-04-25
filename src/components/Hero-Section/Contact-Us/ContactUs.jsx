import React from "react";
import location from "../../../assets/icons/location.svg";
import phone from "../../../assets/icons/phone.svg";
import mail from "../../../assets/icons/mail.svg";
import "./ContactUs.scss";

export default function ContactUs() {
    return (
        <div id="contact-us-parent-container">
            <div id="contact-us-child-container">
                <div class="contact-container">
                    <img src={location} alt="" />
                    <div className="info-container">
                        <h2>Pay Us a Visit</h2>
                        <p>Union St, Seattle, WA 98101, United States</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div class="contact-container">
                    <img src={phone} alt="" />
                    <div className="info-container">
                        <h2>Give Us a Call</h2>
                        <p>(110) 1111-1010</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div class="contact-container">
                    <img src={mail} alt="" />
                    <div className="info-container">
                        <h2>Send Us a Message</h2>
                        <p>Contact@HydraVTech.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}