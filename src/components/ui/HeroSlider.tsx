/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { heroTexts } from "../../../data";
import { motion } from "framer-motion";

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTextVariants = {
    hidden: { opacity: 1, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3, ease: "easeOut" },
    },
  };

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => {
          document
            .querySelectorAll(".pagination-bullet")
            .forEach((bullet, index) => {
              bullet.addEventListener("click", () => swiper.slideTo(index));
            });
        }}
        loop={true}
        className="mySwiper"
      >
        {heroTexts.map(({ id, text_t, text_b, src }, index) => (
          <SwiperSlide className="w-screen h-screen relative" key={id}>
            <div className="overlay absolute w-screen h-screen bg-[rgba(0,0,0,0.6)]"></div>

            <motion.div
              className="hero_desc absolute w-screen h-screen left-0 top-0 right-0 flex items-center justify-center flex-col gap-4 border-red-200"
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
              variants={slideTextVariants}
            >
              <p className="uppercase text-white text-md lg:text-2xl text-center">
                Unique place and luxury hotel
              </p>
              <h1 className="gilda-display-regular uppercase text-white text-md text-[2rem] text-center mb-5 lg:text-5xl">
                <span className="mb-10">{text_t}</span>
                <br />
                <span>{text_b}</span>
              </h1>
              <a className="cta-hero px-[20px] py-[10px] border border-white bg-transparent text-white text-lg uppercase">
                <div className="hover-effect"></div>
                <span className="barlow-condensed-regular">rooms & suites</span>
              </a>
            </motion.div>
            <img
              src={src}
              alt="room-1"
              className="object-cover h-screen w-screen"
            />
          </SwiperSlide>
        ))}
        {/* My own pagination */}
        <div className="custom-pagination absolute bottom-9 left-1/2 -translate-x-1/2 z-10">
          {heroTexts.map((_, index) => (
            <button
              key={index}
              className={`pagination-bullet ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default HeroSlider;
