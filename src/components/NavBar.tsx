/* eslint-disable @next/next/no-img-element */
import { SlMenu } from "react-icons/sl";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type MyProps = {
  isOpen: boolean;
  onClick?: () => void;
};

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <div className="relative grid place-items-center w-screen">
      <MobileMenu isOpen={isOpen} onClick={toggleMenu} />

      <nav className="absolute top-2 z-50 flex items-center justify-between bg-white w-[90vw] py-[20px] lg:py-[30px] px-[30px] lg:px-[40px]">
        <div className="logo flex items-center">
          <img src="/assets/logo.png" alt="logo" className="w-28" />
        </div>

        <div className="w-[1px] bg-orange h-[35px]" />

        <div className="menu cursor-pointer lg:hidden" onClick={toggleMenu}>
          <SlMenu color="black" className="w-7 h-7" />
        </div>
        <div className="desk-nav-items hidden lg:flex">
          <div className="flex gap-9 items-center">
            <a className="text-lg uppercase">Home</a>
            <a className="text-lg uppercase">Rooms & suits</a>
            <a className="text-lg uppercase">About</a>
            <a className="text-lg uppercase">Pages</a>
            <a className="text-lg uppercase">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
