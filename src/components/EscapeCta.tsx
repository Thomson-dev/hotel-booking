import React from "react";
import { BsAirplaneEngines } from "react-icons/bs";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { call_to_action } from "../../data";
import { IoFastFoodOutline } from "react-icons/io5";
import { color } from "framer-motion";
import Before from "./ui/Before";

const EscapeCta = () => {
  return (
    <div className="p-3 lg:w-[50%]">
      <div className="title flex flex-col mb-10 gap-4">
        <p className="barlow-condensed-regular text-[#222] text-lg uppercase flex gap-2 items-center tracking-[.3em]">
          Rooms & suites
         <Before/>
        </p>
        {/* <p className="barlow-condensed-regular tracking-widest text-[#666] text-lg uppercase flex gap-2 items-center">
          call to action
        </p> */}
        <h2 className="gilda-display-regular text-[2.5rem] text-[#222222] capitalize tracking-wider lg:text-5xl">
          The Thin Escape.
        </h2>
        {/* <h2 className="gilda-display-regular text-[2.5rem] text-[#22222] leading-[50px] capitalize">
          the thin escape.
        </h2> */}
      </div>
      <div className="showcase flex flex-col gap-[3rem] w-full">
        {call_to_action.map(({ id, head, text }) => (
          <div key={id} className="flex gap-8">
            <div className="icon-box rounded-full w-[80px] h-[80px] flex items-center justify-center flex-shrink-0 hover:bg-[#222]">
              {id == 1 && (
                <BsAirplaneEngines
                  color="#aa8453"
                  className="w-[45px] h-[45px]"
                />
              )}
              {id == 2 && (
                <IoFastFoodOutline
                  color="#aa8453"
                  className="w-[45px] h-[45px]"
                />
              )}
              {id == 3 && (
                <LiaSwimmingPoolSolid
                  className="w-[45px] h-[45px]"
                  color="#aa8453"
                />
              )}
            </div>
            <div className="text flex flex-col gap-2 flex-grow">
              <p className="gilda-display-regular capitalize font-bold text-lg text-[#666666]">
                {head}
              </p>
              <p className="text-[#666666] text-[17px]">{text}</p>
            </div>
          </div>
        ))}
        <div className="btn-box">
          <a className="cta-hero w-[150px] px-[50px] py-[20px] h-[60px] text-white bg-[#222222] relative text-sm uppercase">
            <div className="hover-effect"></div>
            <span className="barlow-condensed-regular text-lg">
              book a hotel
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EscapeCta;
