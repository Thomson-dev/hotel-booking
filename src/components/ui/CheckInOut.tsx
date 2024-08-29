import { Description, Field, Label, Select } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import clsx from "clsx";
import { BiCalendar } from "react-icons/bi";

export default function CheckInOut() {
  return (
    <div className="w-full px-[30px] py-[20px] bg-white flex items-center justify-between border border-[#adadad]">
      <span className="text-lg">Check in</span>
      <BiCalendar color="#aa8453" className="w-6 h-6" />
    </div>
  );
}
