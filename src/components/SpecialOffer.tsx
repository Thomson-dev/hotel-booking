import React from "react";

const SpecialOffer = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto flex items-center justify-center  absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
      <div className="flex w-full flex-col items-center bg-[url('/assets/pattern-bg.png')] bg-[#faf7f2] bg-center bg-cover px-10 py-10 gap-4">
        <p className="text-[#a6a5a6] text-center">
          Risus commodo viverra accumsan
          <br /> lacus vel facilisis
        </p>
        <h5 className="text-[#222] gilda-display-regular font-bold text-3xl capitalize text-center">
          Special Holiday Offer
        </h5>
        <a className="cta-hero w-[150px] grid place-items-center px-[30px] h-[60px] text-white bg-[#222222] relative text-sm uppercase">
          <div className="hover-effect"></div>
          <span className="text-center barlow-condensed-regular text-lg">
            book now
          </span>
        </a>
      </div>
    </div>
  );
};

export default SpecialOffer;
