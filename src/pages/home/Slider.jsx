import React, { useRef, useState } from "react";
import Images from "../../components/Images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "" + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="slider_image" src={Images.sliderImage} alt="bannar" />
          <div className="slider_info">
            <h3>Hello</h3>
            <h3>I Am Jashika Jonson</h3>
            <p>And I can help you lose weight fast and safety</p>
            <span>
              Instead, it will copy all the configuration files and the
              transitive dependencies webpack, Babel, ESLint, etc right into
              your project so you have full control over them. All of the
              commands except
            </span>
            <div className="slider_info_button">
              <button>Contact Us</button>
              <button>Click Here</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider_image" src={Images.sliderImage} alt="bannar" />
          <div className="slider_info">
            <h3>Hello</h3>
            <h3>I Am Jashika Jonson</h3>
            <p>And I can help you lose weight fast and safety</p>
            <span>
              Instead, it will copy all the configuration files and the
              transitive dependencies webpack, Babel, ESLint, etc right into
              your project so you have full control over them. All of the
              commands except
            </span>
            <div className="slider_info_button">
              <button>Contact Us</button>
              <button>Click Here</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider_image" src={Images.sliderImage} alt="bannar" />
          <div className="slider_info">
            <h3>Hello</h3>
            <h3>I Am Jashika Jonson</h3>
            <p>And I can help you lose weight fast and safety</p>
            <span>
              Instead, it will copy all the configuration files and the
              transitive dependencies webpack, Babel, ESLint, etc right into
              your project so you have full control over them. All of the
              commands except
            </span>
            <div className="slider_info_button">
              <button>Contact Us</button>
              <button>Click Here</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
