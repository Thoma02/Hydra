import React from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import ContactUs from "./Contact-Us/ContactUs";
import "./Hero.scss";

export default function Hero() {
  return (
    <div id="hero-container">
        <Nav />
        <Header />
        <ContactUs />
    </div>
  );
}