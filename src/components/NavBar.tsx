/* eslint-disable @next/next/no-img-element */
import { SlMenu } from "react-icons/sl";

const NavBar = () => {
  return (
    <nav className="absolute top-4 left-[50%] -translate-x-[50%] mx-auto px-8 py-5 flex items-center justify-between bg-white w-[90vw]">
      <div className="logo flex items-center">
        <img src="/assets/logo.png" alt="logo" className="w-28" />
      </div>
      <div className="w-[1px] bg-orange h-[35px]" />
      <div className="menu">
        <SlMenu color="black" className="w-7 h-7" />
      </div>
    </nav>
  );
};

export default NavBar;
