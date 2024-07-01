// Slider.jsx

import React, { useState, useEffect } from "react";
import "../slider/slider.css";
import Search from "../search/Search";


const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ["/image/house2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider_container">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={idx === index ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="text container">
            <p>we provide best services</p>
            <h2 className="heading">Your Dream Home Awaits  Explore Our Listings.</h2>
            <p>
            Find your dream home in our listings today. Start your homeownership journey with us now!
            </p>
            {/* <button className="btn contact_btn">Contact Us</button> */}

         {/* ************************search component************************************* */}
         {/* <div> <Search/></div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
