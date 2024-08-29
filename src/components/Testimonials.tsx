import React from "react";
import Before from "./ui/Before";
import TestimonialCard from "./ui/TestimonialCard";
import { testimonial_data } from "../../data";
import SpecialOffer from "./SpecialOffer";

const Testimonials = () => {
  return (
    <section className="bg-[url('/assets/background.jpg')] py-20 px-4 flex flex-col gap-[30px] relative">
      <div className="title flex flex-col items-center gap-[15px]">
        <p className="barlow-condensed-regular flex items-center gap-2 text-[#a6a5a6] text-lg lg:text-xl uppercase tracking-[7.8px] ">
          <Before /> What says for customer <Before />
        </p>
        <h3 className="gilda-display-regular text-white text-4xl capitalize lg:text-6xl mb-[20px]">
          what client's say?
        </h3>
      </div>
      <div className="testimonial-grid flex flex-col gap-10 lg:flex-row w-full md:max-w-[1250px] mx-auto mb-[150px]">
        {testimonial_data.map(({ id, name, title, src, details }) => (
          <TestimonialCard
            key={id}
            id={id}
            name={name}
            title={title}
            src={src}
            details={details}
          />
        ))}
      </div>
      <SpecialOffer />
    </section>
  );
};

export default Testimonials;
