import React from "react";
import Services from "./Services";
import CTA from "./CTA";
import Hero from "@/components/Hero";
import BookingSection from "@/components/BookingSection";
import Testimonials from "@/components/Testimonials";
import LatestNews from "@/components/LatestNews";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Hero />
      <CTA />
      <Services />
      <BookingSection />
      <Testimonials />
      <LatestNews />
    </div>
  );
};

export default Home;
