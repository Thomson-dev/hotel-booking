import React from "react";
import { FaComments } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const NewsCard = ({
  day,
  date,
  img,
  writer,
  writerImg,
  desc,
}: {
  day: string;
  date: number;
  img: string;
  writer: string;
  writerImg: string;
  desc: string;
}) => {
  return (
    <div className="mb-[100px]">
      <div className="news-img  relative w-full ">
        <div className="absolute top-0 left-0 overlay w-full h-full bg-[rgba(0,0,0,0.2)] "></div>
        <div className="date absolute top-0 right-[10%] flex flex-col py-[14px] [85px] w-[45px] bg-orange">
          <span className="text-white h- text-center uppercase text-lg">
            {day}
          </span>
          <span className="text-white text-center uppercase text-2xl">
            {date}
          </span>
        </div>
        <div className="overflow-hidden">
          <img
            src={`/assets/${img}.jpg`}
            className="img mx-auto cursor-pointer transition-all"
            alt="news"
          />
        </div>
        <div className="profile absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white w-[90%] shadow-md pl-4 flex flex-col gap-3">
          <div className="top flex items-end gap-2 -translate-y-2">
            <img
              src="/assets/pro-1.jpg"
              alt=""
              className="border-orange border"
            />
            <span className="text-[#666] text-sm">{writer}</span>
          </div>

          <div className="middle">
            <h4 className="gilda-display-regular text-xl">{desc}</h4>
          </div>

          <div className="bottom flex justify-between">
            <span className="flex items-center gap-2 text-sm text-[#666]">
              <FaComments className="text-orange" />0 comments
            </span>

            <a className="cta-hero px-[20px] py-[10px] text-[#222] bg-[#f8f5f0] relative text-sm uppercase flex items-center">
              <div className="hover-effect"></div>
              <span className="barlow-condensed-regular text-sm flex items-center gap-2">
                read more
                <IoIosArrowRoundForward />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
