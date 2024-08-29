import React from "react";
import HotelBooking from "./HotelBooking";
import EscapeCta from "./EscapeCta";

const BookingSection = () => {
  return (
    <section className="md:max-w-[1250px] w-[95%] mx-auto flex flex-col lg:flex-row justify-between mb-10">
      <EscapeCta />
      <HotelBooking />
    </section>
  );
};

export default BookingSection;
