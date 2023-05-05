import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Services.scss";
import shadow from "../../assets/icons/shadow.svg";
import vector4 from "../../assets/vectors/vector-4.svg";
import ServicesSlider from "./ServicesSlider/ServicesSlider";
import randomKey from "../../utils/randomKey";

export default function Services() {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
    async function fetchData() {
        const options = {
            method: 'GET',
            url: 'https://ar-vr-news2.p.rapidapi.com/api/news',
            headers: {
            'X-RapidAPI-Key': '9375730b2emsh5e20f729f7e54bbp17243fjsn080ede20933e',
            'X-RapidAPI-Host': 'ar-vr-news2.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setNewsData([response.data]);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
    }, []);

    return (
        <div className="services-container">
            <div className="why-build-with-hydra-container">
                <div className="title-container">
                    <h1>WHY BUILD</h1>
                    <div className="subtitle-container">
                        <h2>WITH HYDRA</h2>
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
            <div className="boxes-container">
                {newsData.map((news) => {
                    return news.data.slice(0, 4).map((item) => {
                        console.log(item.title);
                        return (
                            <div className="box-container" key={randomKey()}>
                                <img className="shadow" src={shadow} alt="" />
                                <img className="box-image" src={item.img_link} alt="" />
                                <div className="box-text-container">
                                    <h3>{item.title.split(' ').slice(0, 1).toString()}</h3>
                                    <div className="box-divider"></div>
                                    <p>
                                        {item.title}
                                    </p>
                                    <button>TRY IT NOW</button>
                                </div>
                            </div>
                        );
                    });
                })}
            </div>
            <ServicesSlider newsData={newsData}/>
            <img className="vector-4" src={vector4} alt="" />
        </div>
    )
}