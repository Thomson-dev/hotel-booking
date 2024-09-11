import Image from "next/image";
import React from "react";
import { BsChatQuote } from "react-icons/bs";
import { FaPlay, FaRegCheckSquare } from "react-icons/fa";

const Hospitality = () => {
  return (
    <div className="grid xl:grid-cols-2 3xl:max-w-[2000px]  gap-[5rem] 3xl:gap-[10rem] py-6  3xl:ml-auto xl:-ml-[10rem]   mx-auto  overflow-x-clip mt-[5rem] grid-cols-1  w-[95%]">
      <div className="relative hidden xl:block ">
        <div className=" w-[750px]  h-[650px] ">
          <Image src={"/assets/food-1.jpg"} alt="" fill />
        </div>

        <div className="absolute  w-[50%]  px-[1rem] bottom-0 py-[2rem] -right-[3rem] bg-[#AA8453]">
          <div className="flex items-center gap-6">
            <BsChatQuote className="text-9xl" />
            <p className="barlow-condensed-regular text-white text-xl max-w-72">
              Great hospitality is the key to Pride of Britain’s longstanding
              reputation for excellence.
            </p>
          </div>
        </div>

        <div className="border flex justify-center items-center absolute right-[6rem] border-white w-36 h-36 top-[5rem] rounded-full ">
          <FaPlay className="text-2xl text-white" />
        </div>
      </div>

      <div className="py-4 ">
        <span className="barlow-condensed-regular uppercase tracking-[0.3rem] text-base text-[#797878] ">
          {" "}
          EAT FROM THE LAND
        </span>
        <h2 className="gilda-display-regular lg:max-w-xl text-left tracking-wider mt-5 text-[#222222] text-3xl sm:text-5xl ">
          Enjoy Food and Even Better Hospitality
        </h2>

        <p className="mt-[3rem] barlow-condensed-regular text-base text-[#797878]  leading-7 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>

        <div className="grid gap-7 mt-[1.5rem] grid-cols-2 ">
          <div className=" ">
            <h4 className="text-2xl text-[#636262]  gilda-display-regular">
              Restaurant
            </h4>

            <ul className="flex flex-col mt-4 space-y-2 text-[#797878]  text-base">
              <div className="flex gap-4">
                <FaRegCheckSquare className="text-[#aa8453]" />
                <li className="barlow-condensed-regular">Healthy Food</li>
              </div>
              <div className="flex gap-4">
                <FaRegCheckSquare className="text-[#aa8453]" />
                <li className="barlow-condensed-regular">
                  Award-winning Restaurant
                </li>
              </div>
              <div className="flex gap-4">
                <FaRegCheckSquare className="text-[#aa8453]" />
                <li className="barlow-condensed-regular">
                  Award-winning Restaurant
                </li>
              </div>
            </ul>
          </div>

          <div className="">
            <h4 className="text-2xl text-[#636262] gilda-display-regular   ">
              SPA & Wellness
            </h4>

            <ul className="flex flex-col mt-4 space-y-2 text-[#797878]  text-base">
              <div className="flex gap-4">
                <FaRegCheckSquare className="text-[#aa8453]" />
                <li className="barlow-condensed-regular">Healthy Food</li>
              </div>
              <div className="flex gap-4">
                <FaRegCheckSquare className="text-[#aa8453]" />
                <li className="barlow-condensed-regular">
                  Award-winning Restaurant
                </li>
              </div>
              <div className="flex gap-4">
                <FaRegCheckSquare className="text-[#aa8453]" />
                <li className="barlow-condensed-regular">
                  Award-winning Restaurant
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="mt-[3rem]  gap-6  flex">
          <div className="relative w-[300px] h-[200px]">
            <Image src={"/assets/food-list.jpg"} alt="" fill />
          </div>
          <div className="relative w-[300px] h-[200px]">
            <Image src={"/assets/food-list-2.jpg"} alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitality;
