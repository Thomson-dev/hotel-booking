"use client";
/* eslint-disable @next/next/no-img-element */
import NavBar from "./NavBar";
import HeroSlider from "./ui/HeroSlider";
import MobileMenu from "./MobileMenu";

const Hero = () => {
  return (
    <section className="w-screen h-screen overflow-x-clip relative">
      <NavBar />
      <div className="hero-holder w-full h-full">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
