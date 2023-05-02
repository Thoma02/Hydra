import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import ServicesPage from "./pages/Services/ServicesPage";
import ProcessPage from "./pages/ProcessPage/ProcessPage";
import TechPage from "./pages/TechPage/TechPage";

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/services' element={<ServicesPage />}/>
                <Route path='/process' element={<ProcessPage />}/>
                <Route path='/tech' element={<TechPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;