import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const servicesLinks = [
    { name: "Home", link: "/home" },
    { name: "Rooms", link: "/rooms" },
    { name: "Suites", link: "/suites" },
    { name: "Wellness", link: "/wellness" },
    { name: "Restaurant", link: "/restaurant" },
    { name: "Spa", link: "/spa" },
    { name: "News", link: "/news" },
    { name: "Gallery", link: "/gallery" },
    { name: "About Hotel", link: "/about-hotel" },
    { name: "Contact", link: "/contact" },
  ];

  const latestNews = [
    {
      title: "Quisque at Felis Port Titordga",
      date: "14 May 2023",
      imageUrl: "/assets/feature-1.jpg",
      link: "/news/quisque-at-felis-port-titordga",
    },
    {
      title: "Tips For Picking Vacation",
      date: "14 May 2023",
      imageUrl: "/assets/about1-2.jpg",
      link: "/news/tips-for-picking-vacation",
    },
  ];

  const information = [
    {
      phoneNumbers: [
        { number: "1800-121-3637" },
        { number: "+91-7052-101-786" },
      ],
      icon: <FaPhone className="text-2xl" />,
    },
    {
      email: "info@example.com",
      icon: <MdEmail className="text-2xl" />,
    },
    {
      address: "1247/Plot No. 39, 15th Phase, United States of America",
      icon: <CiLocationOn className="text-5xl" />,
    },
  ];

  return (
    <div className="bg-[#222222] flex justify-between flex-col mt-[5rem]  min-h-[30rem]">
      <div className="grid mt-[7rem] lg:grid-cols-4 gap-20 max-w-[1200px]  w-[95%] mx-auto text-white md:grid-cols-2 grid-cols-1 ">
        <div className="space-y-8">
          <Image src="/assets/logo-2.png" width={150} height={150} alt="" />
          <p className="text-slate-300">
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan volutpat.
          </p>
          <div className="flex items-center cursor-pointer  flex-row gap-4">
            <div className="w-10 h-10 rounded-full duration-150 delay-75 hover:bg-orange border-slate-300 border items-center justify-center flex ">
              <FaFacebook className="text-xl text-slate-300 " />
            </div>
            <div className="w-10 h-10 duration-150 delay-75 hover:bg-orange rounded-full border-slate-300 border items-center justify-center flex">
              <FaTwitter className="text-xl text-slate-300" />
            </div>
            <div className="w-10 h-10 duration-150 delay-75 hover:bg-orange rounded-full border-slate-300 border items-center justify-center flex">
              <FaLinkedinIn className="text-xl text-slate-300" />
            </div>
            <div className="w-10 h-10 duration-150 delay-75 hover:bg-orange rounded-full border-slate-300 border items-center justify-center flex">
              <FaYoutube className="text-xl text-slate-300" />
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl gilda-display-regular">Services Links</h2>
          <div className="flex text-slate-300 flex-row gap-6 mt-3">
            <div className="">
              {servicesLinks.slice(0, 5).map((_) => {
                return (
                  <ul key={_.name} className="flex-col  flex">
                    <li className="mt-3">{_.name}</li>
                  </ul>
                );
              })}
            </div>
            <div className="">
              {servicesLinks.slice(5, 10).map((_) => {
                return (
                  <ul key={_.name} className="flex-col flex">
                    <li className="mt-3">{_.name}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl gilda-display-regularl">Latest News</h2>
          {latestNews.map((item) => {
            return (
              <div
                key={item.title}
                className="flex text-slate-300  mt-5  flex-col"
              >
                {
                  <div className="flex gap-5 flex-row">
                    <Image
                      src={item.imageUrl}
                      width={70}
                      height={20}
                      objectFit="contain"
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-xl tracking-normal">{item.title}</h1>
                      <span className="text-sm text-[#AA8453]">
                        {item.date}
                      </span>
                    </div>
                  </div>
                }
              </div>
            );
          })}
        </div>
        <div className="">
          <h2 className="gilda-display-regular text-2xl">Information</h2>
          {information.map((item, index) => (
            <div key={index} className=" flex text-slate-300  flex-col">
              <div className="flex items-center space-x-5  space-y-5   flex-row">
                {item.icon}
                <div className="">
                  <div className="">
                    {item.phoneNumbers?.map((_) => (
                      <div key={_.number} className="">
                        {_.number}
                      </div>
                    ))}
                  </div>

                  <div className=" text-center">{item.email}</div>

                  <div className="">{item.address}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-[#333333] w-full h-[3.5rem]"></div> */}
    </div>
  );
};

export default Footer;
