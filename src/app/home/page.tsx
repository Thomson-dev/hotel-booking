import React from "react";
import Services from "./Services";
import CTA from "./CTA";
import Hero from "@/components/Hero";
import BookingSection from "@/components/BookingSection";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Hero />
      <CTA />
      <Services />
      <BookingSection />
      <Testimonials />
    </div>
  );
};

export default Home;
