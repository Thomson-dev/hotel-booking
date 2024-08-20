import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CustomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = ["Slide 1", "Slide 2", "Slide 3"]; // Your slide content

  return (
    <div className="swiper-container">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        loop={true}
        onSwiper={(swiper) => {
          document
            .querySelectorAll(".pagination-bullet")
            .forEach((bullet, index) => {
              bullet.addEventListener("click", () => swiper.slideTo(index));
            });
        }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <div>{slideContent}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`pagination-bullet ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSwiper;
