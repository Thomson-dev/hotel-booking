import React from "react";
import Services from "./Services";
import CTA from "./CTA";
import Hero from "@/components/Hero";
import Price from "@/app/home/Price";
import Hospitality from "./Hospitality";

const Home = () => {
  return (
    <div className="">
      <Hero />
        <CTA/>
      <Services />
      <Price/>
      <Hospitality/>
    </div>
  );
};

export default Home;
