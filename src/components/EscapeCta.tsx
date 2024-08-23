import React from "react";
import { BsAirplaneEngines } from "react-icons/bs";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { call_to_action } from "../../data";
import { IoFastFoodOutline } from "react-icons/io5";

const EscapeCta = () => {
  return (
    <div className="p-3">
      <div className="title flex flex-col mb-10">
        <p className="text-orange text-lg uppercase flex gap-2 items-center">
          call to action
        </p>
        <h2 className="text-[2.5rem] text-[#22222] leading-[50px] capitalize">
          the thin escape.
        </h2>
      </div>
      <div className="showcase flex flex-col gap-[3rem] w-full">
        {call_to_action.map(({ id, head, text }) => (
          <div key={id} className="flex gap-8">
            <div className="icon-box rounded-full w-[80px] h-[80px] flex items-center justify-center flex-shrink-0">
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
              <p className="capitalize font-semibold text-lg text-[#666666]">
                {head}
              </p>
              <p className="text-[#666666] text-[17px]">{text}</p>
            </div>
          </div>
        ))}
        <div className="btn-box">
          <a className="cta-hero w-[150px] px-[50px] py-[20px] h-[60px] text-white bg-[#222222] relative text-sm uppercase">
            <div className="hover-effect"></div>
            <span>book a hotel</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EscapeCta;
