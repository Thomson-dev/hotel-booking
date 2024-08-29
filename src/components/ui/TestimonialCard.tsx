import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const TestimonialCard = ({
  id,
  name,
  title,
  src,
  details,
}: {
  id: number;
  name: string;
  title: string;
  src: string;
  details: string;
}) => {
  return (
    <div className="testi-card bg-white w-full flex flex-col items-center gap-8 py-[45px] px-[15px] relative">
      <div className="title flex flex-col items-center">
        <h4 className="gilda-display-regular text-2xl text-[#222] capitalize">
          {name}
        </h4>
        <p className="barlow-condensed-regular text-orange uppercase">
          {title}
        </p>
      </div>
      <div className="relative mb-[40px]">
        <img
          src={src}
          alt=""
          className="w-[130px] h-[130px]"
        />
        <FaCircleCheck
          className="w-[40px] h-[40px] absolute -translate-y-[50%] left-1/2 -translate-x-1/2 "
          color="#aa8453"
        />
      </div>
      <p className="text-[#666] text-center text-sm leading-7">{details}</p>
    </div>
  );
};

export default TestimonialCard;
