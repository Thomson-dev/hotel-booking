import React from "react";
import Services from "./Services";
import CTA from "./CTA";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div className="">
      <Hero />
        <CTA/>
      <Services />
    </div>
  );
};

export default Home;
