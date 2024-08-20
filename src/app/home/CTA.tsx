import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import bulb from "/asset/bulb.png";

const CTA = () => {
  return (
    <div className="grid lg:grid-cols-2 md:max-w-[1250px] py-10 grid-cols-1 mx-auto w-[98%]">
      <div className="px-2  ">
        <span className="barlow-condensed-regular uppercase tracking-[0.2rem] text-base text-[#797878]">
          Hoexr Luxury Hotel
        </span>
        <div className="mt-5">
          <h2 className=" gilda-display-regular tracking-wider text-[#222222] text-3xl sm:text-4xl xl:text-5xl">
            We Provide Outdoor
          </h2>
          <h2 className=" gilda-display-regular tracking-wider text-[#222222] text-3xl sm:text-4xl  xl:text-5xl">
            Activities To All Visitors
          </h2>

          <p className=" text-base text-[#aa8453] font-semibold xl:max-w-lg max-w-full leading-7 mt-10">
            San Francisco has hills with views, the coast, excellent food & has
            been voted the happiest, healthiest and fittest city in the States
            many times.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-y-7 grid-cols-1 items-center">
            <div className="flex gap-5">
              <Image
                alt="bulb"
                className="max-w-[65px] text-[#222222] "
                src="/assets/bulb.png"
              />
              <h4 className="gilda-display-regular    max-w-[10rem]  text-[#222222] text-2xl">
                The Best Lighting
              </h4>
            </div>

            <div className="flex gap-5">
              <Image
                alt="swimmuig"
                className="max-w-[74px] text-[#222222] "
                src="/assets/swimming.png"
              />
              <h4 className="gilda-display-regular    text-[#222222] text-2xl max-w-[10rem] ">
                The Best Swiming
              </h4>
            </div>
          </div>

          <div className="flex flex-col space-y-3 mt-10">
            <div className="flex gap-4">
              <FaCheckCircle className="text-[#aa8453] text-xl" />

              <p className="barlow-condensed-regula text-base text-slate-500">
                It is a long fact that a reader will be distracted by the
                readable
              </p>
            </div>
            <div className="flex gap-4">
              <FaCheckCircle className="text-[#aa8453] text-xl" />

              <p className="barlow-condensed-regula text-base text-slate-500">
                It is a long fact that a reader will be distracted by the
                readable
              </p>
            </div>
            <div className="flex gap-4">
              <FaCheckCircle className="text-[#AA8453] text-xl" />

              <p className="barlow-condensed-regula text-base text-slate-500">
                It is a long fact that a reader will be distracted by the
                readable
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[5rem] ">
        <div className="flex sm:gap-3 gap-1  justify-center">
          <div className="border w-9 h-[16rem] bg-[#aa8453]  "></div>
          <div className="relative">
            <Image
              src="/about1-1.jpg"
              alt=""
              className="max-w-[402px] w-full h-[520px] object-cover"
            />
            <div className="absolute -bottom-[10rem] xl:-left-[10rem] -left-[2rem] sm:-left-[8rem]
             lg:-left-16 sm:right-[20rem]   ">
              <Image src="/about2-2.jpg" alt="" className="max-w-[300px] h-auto" />
            </div>
            <div className="sm:w-[60%] w-[65%] absolute xl:top-[22rem]  xl:left-[6rem] left-[7rem] -bottom-[7rem]  sm:top-[20rem]  sm:left-[17rem] lg:right-3 animated-element bg-[#090909]  px-2 z-30 h-64 flex justify-center flex-col text-white items-center ">
              <Image src="exp-icon.png" alt="" className="max-w-full  h-auto" />
              <h1 className="mt-5">Luxury Room</h1>
              <p className="text-center  text-sm">
                Donec in quis the asd pellentesque velit. Donec id velit arcu
                posuere blane.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
