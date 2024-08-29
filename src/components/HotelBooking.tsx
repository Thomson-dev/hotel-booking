import React from "react";
import CheckInOut from "./ui/CheckInOut";
import Before from "./ui/Before";

const HotelBooking = () => {
  return (
    <section className="booking w-full p-3 lg:w-[50%] ">
      <div className="booking-inner p-3 lg:p-8 bg-[#faf7f2] relative">
        <div className="title flex flex-col mb-5 p-3">
          <p className="barlow-condensed-regular text-[#222] text-lg uppercase flex gap-2 items-center tracking-[.3em]">
            Rooms & suites
            <Before/>
          </p>
          <h2 className="gilda-display-regular text-[2.5rem] text-[#222222] capitalize tracking-wider lg:text-5xl">
            hotel booking
          </h2>
        </div>
        <div className="form p-3 flex flex-col gap-6 ">
          <CheckInOut />
          <CheckInOut />
          <CheckInOut />
          <CheckInOut />
          <div className="btn-box w-full">
            <a className="cta-hero w-full grid place-items-center px-[30px] h-[70px] text-white bg-[#222222] relative text-sm uppercase">
              <div className="hover-effect"></div>
              <span className="text-center barlow-condensed-regular text-lg">
                check availability
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelBooking;
