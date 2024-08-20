"use client";
/* eslint-disable @next/next/no-img-element */
import NavBar from "./NavBar";
import HeroSlider from "./ui/HeroSlider";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { log } from "console";

const Hero = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <section className="w-screen h-screen overflow-x-clip relative">
      <NavBar isOpen={isOpen} onClick={toggleMenu} />
      <div className="hero-holder w-full h-full">
        <HeroSlider />
      </div>
      <MobileMenu isOpen={isOpen} onClick={toggleMenu}/>
    </section>
  );
};

export default Hero;
