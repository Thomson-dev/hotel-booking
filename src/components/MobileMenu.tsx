/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  FaAngleRight,
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { CiMail, CiAlarmOn, CiPhone } from "react-icons/ci";
import { navItems, contactInfo } from "../../data";

type MyProps = {
  isOpen: boolean;
  onClick?: () => void;
};

const MobileMenu = ({ isOpen, onClick }: MyProps) => {
  return (
    <div
      className={`menu-mobile w-screen  h-screen flex z-[200] absolute top-0
        ${isOpen ? "translate-x-0" : "translate-x-full"}
          transition-all`}
    >
      <div className="overlay-side w-[20%] max-w-[calc(100%-500px)] lg: h-full bg-[rgba(0,0,0,0.7)] backdrop-blur-l"></div>

      <div className="menu-main bg-[#222] w-[80%] h-full grid max-w-[500px] ml-auto">
        <div className="upper-box flex justify-between items-center px-[20px] py-[10px] border-b-[1px] border-[rgba(255,255,255,.1)]">
          <img src="/assets/logo-menu.webp" alt="logo" className="" />
          <div
            className="close opacity-90 p-2 bg-[rgba(255,255,255,.1)] cursor-pointer hover:opacity-40 hover:scale-90"
            onClick={onClick}
          >
            <FaTimes color="white" className="w-4 h-4" />
          </div>
        </div>

        <div className="mid-box w-full">
          {navItems.map((item, index) => (
            <div
              className="w-full flex justify-between items-center px-[20px] py-[10px] border-b-[1px] border-[rgba(255,255,255,.1)]
              cursor-pointer"
              key={index}
            >
              <a
                href="/"
                className="text-white text-lg capitalize 
            "
              >
                {item}
              </a>
              <span className="border-l border-[rgba(255,255,255,.1)] p-2">
                <FaAngleRight color="white" className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>

        <div className="mid-lower-box px-[20px] py-[20px] flex flex-col items-start gap-6">
          {contactInfo.map(({ id, name, detail, icon }) => (
            <div className="flex gap-5 items-center" key={id}>
              {id === 1 && (
                <CiPhone color="white" className="w-[35px] h-[35px]" />
              )}
              {id === 2 && (
                <CiMail color="white" className="w-[35px] h-[35px]" />
              )}
              {id === 3 && (
                <CiAlarmOn color="white" className="w-[35px] h-[35px]" />
              )}

              <div className="text flex flex-col gap-[3px] items-start">
                <span className="text-orange uppercase text-sm">{name}</span>
                <span className="text-white text-lg">{detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-box w-full flex justify-self-end">
          <div className="grid w-[25%] py-4 mt-auto justify-self-end border-[rgba(255,255,255,.1)] border place-items-center">
            <FaTwitter className="w-[20px] h-[20px] z-[99]" color="white" />
          </div>
          <div className="grid w-[25%] py-4 mt-auto justify-self-end border-[rgba(255,255,255,.1)] border place-items-center">
            <FaFacebook className="w-[20px] h-[20px] z-[99]" color="white" />
          </div>
          <div className="grid w-[25%] py-4 mt-auto justify-self-end border-[rgba(255,255,255,.1)] border place-items-center">
            <FaPinterest className="w-[20px] h-[20px] z-[99]" color="white" />
          </div>
          <div className="grid w-[25%] py-4 mt-auto justify-self-end border-[rgba(255,255,255,.1)] border place-items-center">
            <FaInstagram className="w-[20px] h-[20px] z-[99]" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
