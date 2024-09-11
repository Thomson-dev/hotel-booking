import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Price = () => {
  return (
    <div className="xl:max-w-[1250px] py-[2rem] relative   w-[95%] mx-auto">
      <div className="h-44 flex justify-center flex-col items-center ">
        <span className="barlow-condensed-regular uppercase tracking-[0.3rem] text-base text-[#797878]">
          Best price
        </span>

        <h2 className="gilda-display-regular lg:max-w-xl text-center tracking-wider mt-2 text-[#222222] text-3xl sm:text-4xl md:text-5xl ">
          The Best Luxury Rooms And Suites
        </h2>
      </div>

      <div className="sm:flex hidden items-center mt-8 justify-center lg:gap-[10rem] sm:gap-[5rem] xl:gap-[15rem]">
        <div className="relative">
          <Image
            src={"/assets/pricing2-1.jpg"}
            alt=""
            width={340}
            height={400}
            className="max-w-full"
          />

          <div className="absolute lg:top-7 top-0 xl:-left-[13rem] lg:-left-[6rem]  flex flex-col items-left justify-center py-[2rem] sm:h-[26rem] lg:min-h-[23rem] w-[80%] bg-[#F8F5F0] px-7 border">
            <div className="  relative ">
              <h6 className="text-5xl gilda-display-regular text-[#AA8453]">
                $200 / <span className="text-base">Night </span>{" "}
              </h6>

              <span className="text-xl  ">Single Room</span>
              <div className="mt-[2rem]">
                <ul className="space-y-2">
                  <div className="flex  gap-5">
                    <FaCheckCircle className="text-[#aa8453] text-lg" />
                    <li className="barlow-condensed-regular">
                      {" "}
                      Pick & Drop Service
                    </li>
                  </div>
                  <div className="flex gap-5">
                    <FaCheckCircle className="text-[#aa8453] text-lg" />
                    <li className="barlow-condensed-regular">Swimming Pool</li>
                  </div>
                  <div className="flex gap-5">
                    <FaCheckCircle className="text-[#aa8453] text-lg" />
                    <li className="barlow-condensed-regular">
                      City Tour Guide
                    </li>
                  </div>
                  <div className="flex gap-5">
                    <FaCheckCircle className="text-[#aa8453] text-lg" />
                    <li className="barlow-condensed-regular">Fibre Internet</li>
                  </div>
                </ul>
              </div>
              <div className="mt-5">
                <button className="px-4 text-sm text-white bg-black py-2">
                  BOOK NOW
                </button>
              </div>
              <div className="bg-[#aa8453] w-24 h-3  absolute -top-16"></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/assets/pricing2-2.jpg"}
            width={340}
            height={400}
            className="max-w-full"
            alt=""
          />

          <div className="absolute lg:top-7 top-0 xl:-left-[13rem] lg:-left-[9rem] sm:-left-[2rem] flex flex-col items-left justify-center py-[2rem]  sm:h-[26rem] lg:min-h-[23rem  w-[80%] bg-[#F8F5F0] px-7 border">
            <div className="  relative ">
              <h6 className="text-5xl gilda-display-regular text-[#AA8453]">
                $200 / <span className="text-base">Night </span>{" "}
              </h6>

              <span className="text-xl  ">Single Room</span>
              <div className="mt-[2rem]">
                <ul className="space-y-2">
                  <div className="flex  gap-5">
                    <FaCheckCircle className="text-[#aa8453] text-lg" />
                    <li className="barlow-condensed-regular">
                      {" "}
                      Pick & Drop Service
                    </li>
                  </div>
                  <div className="flex gap-5">
                    <FaCheckCircle className="text-[#aa8453] text-lg" />
                    <li className="barlow-condensed-regular">Swimming Pool</li>
                  </div>
                  <div className="flex gap-5">
                    <FaCheckCircle className="text-[#aa8453] text-lg" />
                    <li className="barlow-condensed-regular">
                      City Tour Guide
                    </li>
                  </div>
                  <div className="flex gap-5">
                    <FaCheckCircle className="text-[#aa8453] text-lg" />
                    <li className="barlow-condensed-regular">Fibre Internet</li>
                  </div>
                </ul>
              </div>
              <div className="mt-5">
                <button className="px-4 text-sm text-white bg-black py-2">
                  BOOK NOW
                </button>
              </div>
              <div className="bg-[#aa8453] w-24 h-3  absolute -top-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* MObile */}

      <div className="flex xs:flex-row flex-col gap-y-4 xs:gap-6">
        <div className=" sm:hidden  flex flex-col items-left justify-center py-[2rem]  sm:h-[26rem] lg:min-h-[23rem  w-[100%] bg-[#F8F5F0] px-7 border">
          <div className="  relative ">
            <h6 className="text-5xl gilda-display-regular text-[#AA8453]">
              $200 / <span className="text-base">Night </span>{" "}
            </h6>

            <span className="text-xl  ">Single Room</span>
            <div className="mt-[2rem]">
              <ul className="space-y-2">
                <div className="flex  gap-5">
                  <FaCheckCircle className="text-[#aa8453] text-lg" />
                  <li className="barlow-condensed-regular">
                    {" "}
                    Pick & Drop Service
                  </li>
                </div>
                <div className="flex gap-5">
                  <FaCheckCircle className="text-[#aa8453] text-lg" />
                  <li className="barlow-condensed-regular">Swimming Pool</li>
                </div>
                <div className="flex gap-5">
                  <FaCheckCircle className="text-[#aa8453] text-lg" />
                  <li className="barlow-condensed-regular">City Tour Guide</li>
                </div>
                <div className="flex gap-5">
                  <FaCheckCircle className="text-[#aa8453] text-lg" />
                  <li className="barlow-condensed-regular">Fibre Internet</li>
                </div>
              </ul>
            </div>
            <div className="mt-5">
              <button className="px-4 text-sm text-white bg-black py-2">
                BOOK NOW
              </button>
            </div>
            <div className="bg-[#aa8453] w-24 h-3  absolute -top-8"></div>
          </div>
        </div>

        <div className=" sm:hidden flex flex-col items-left justify-center py-[2rem]  sm:h-[26rem] lg:min-h-[23rem  w-[100%] bg-[#F8F5F0] px-7 border">
          <div className="  relative ">
            <h6 className="text-5xl gilda-display-regular text-[#AA8453]">
              $200 / <span className="text-base">Night </span>{" "}
            </h6>

            <span className="text-xl  ">Single Room</span>
            <div className="mt-[2rem]">
              <ul className="space-y-2">
                <div className="flex  gap-5">
                  <FaCheckCircle className="text-[#aa8453] text-lg" />
                  <li className="barlow-condensed-regular">
                    {" "}
                    Pick & Drop Service
                  </li>
                </div>
                <div className="flex gap-5">
                  <FaCheckCircle className="text-[#aa8453] text-lg" />
                  <li className="barlow-condensed-regular">Swimming Pool</li>
                </div>
                <div className="flex gap-5">
                  <FaCheckCircle className="text-[#aa8453] text-lg" />
                  <li className="barlow-condensed-regular">City Tour Guide</li>
                </div>
                <div className="flex gap-5">
                  <FaCheckCircle className="text-[#aa8453] text-lg" />
                  <li className="barlow-condensed-regular">Fibre Internet</li>
                </div>
              </ul>
            </div>
            <div className="mt-5">
              <button className="px-4 text-sm text-white bg-black py-2">
                BOOK NOW
              </button>
            </div>
            <div className="bg-[#aa8453] w-24 h-3  absolute -top-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
