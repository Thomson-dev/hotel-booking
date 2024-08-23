import React from "react";
import Services from "./Services";
import Hero from "@/components/Hero";
import EscapeCta from "@/components/EscapeCta";
import HotelBooking from "@/components/HotelBooking";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <EscapeCta />
      <HotelBooking/>
    </div>
  );
};

export default Home;
