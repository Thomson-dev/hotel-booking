import React from "react";
import CheckInOut from "./ui/CheckInOut";

const HotelBooking = () => {
  return (
    <section className="booking w-full">
      <div className="booking-inner p-3 bg-[#faf7f2]">
        <div className="title flex flex-col mb-10">
          <p className="text-orange text-lg uppercase flex gap-2 items-center">
            Rooms & suites
          </p>
          <h2 className="text-[2.5rem] text-[#222222] leading-[50px] capitalize">
            hotel booking
          </h2>
        </div>
        <div className="form">
            <CheckInOut/>
        </div>
      </div>
    </section>
  );
};

export default HotelBooking;
