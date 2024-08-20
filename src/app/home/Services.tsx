import React from "react";
import {
  FaCoffee,
  FaConciergeBell,
  FaParking,
  FaShuttleVan,
  FaSwimmer,
} from "react-icons/fa";
import roomService from "@/app/assert/hotel-service.png";
import delivery from "@/app/assert/delivery.png";
import vehicle from "@/app/assert/vehicle.png";
import breakfast from "@/app/assert/croissant.png";
import swimming from "@/app/assert/swimming.png";
import lastImage from "@/app/assert/2.jpg";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Room Service",
    description:
      "Orci varius natoque penatibus magnis ders disney parturient ridiculus",
    icon: roomService,
  },
  {
    id: 2,
    title: "Swimming Pool",
    description:
      "Orci varius natoque penatibus magnis ders disney parturient ridiculus",
    icon: swimming,
  },
  {
    id: 3,
    title: "Parking Space",
    description:
      "Orci varius natoque penatibus magnis ders disney parturient ridiculus",
    icon: vehicle,
  },
  {
    id: 4,
    title: "Breakfast",
    description:
      "Orci varius natoque penatibus magnis ders disney parturient ridiculus",
    icon: breakfast,
  },
  {
    id: 5,
    title: "Pick Up & Drop",
    description:
      "Orci varius natoque penatibus magnis ders disney parturient ridiculus",
    icon: delivery,
  },
  {
    id: 6,
    icon: lastImage,
  },
];

const Services = () => {
  return (
    <div className="banner py-[2rem]  mt-[10rem] ">
      <div className="md:max-w-[1250px] w-[95%] mx-auto">
        <div className="h-44 flex justify-center flex-col items-center ">
          <span className="barlow-condensed-regular uppercase tracking-[0.3rem] text-base text-[#797878]">
            Hoexr SERVICES
          </span>

          <h2 className="gilda-display-regular tracking-wider mt-2 text-[#222222] text-3xl sm:text-5xl">
            Hotel Facilities
          </h2>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className= {`border  px-[1.5rem] text-[#aa8453]  bg-white cursor-pointer ${service.id ==6 ? 'pt-4': 'py-[4rem]'}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center  gap-8">
                <Image
                  src={service.icon}
                  className= {` ${service.id ==  6 ? 'max-w-full hover:scale-110 ease-in ': 'max-w-[70px]'}`}
                  alt={service.title || ""}
                />
                <div className="">
                  <h4 className="text-2xl gilda-display-regular ">
                    {service.title}
                  </h4>
                </div>
              </div>

              <p className="text-base barlow-condensed-regular mt-3  ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
