import React from "react";
import { ReactComponent as Parking } from "../../icons/parking.svg";
import { ReactComponent as Activities } from "../../icons/activities.svg";
import { ReactComponent as Storage } from "../../icons/storage.svg";
import { ReactComponent as Water } from "../../icons/water.svg";
import { ReactComponent as Laundry } from "../../icons/laundry.svg";
import { ReactComponent as Hangout } from "../../icons/hangout.svg";
import { ReactComponent as Wifi } from "../../icons/wifi.svg";
import { ReactComponent as Cafe } from "../../icons/cafe.svg";
import { ReactComponent as Light } from "../../icons/light.svg";
import { ReactComponent as Housekeeping } from "../../icons/housekeeping.svg";
import { ReactComponent as Credit } from "../../icons/credit.svg";
import { ReactComponent as Mic } from "../../icons/mic.svg";
import TextComponent from "./TextComponent";

const amenities = [
  {
    icon: Parking,
    title: "Parking",
  },
  {
    icon: Housekeeping,
    title: "Housekeeping",
  },
  {
    icon: Activities,
    title: "Activities",
  },
  {
    icon: Storage,
    title: "Storage",
  },
  {
    icon: Water,
    title: "Hot Water",
  },
  {
    icon: Laundry,
    title: "Laundry",
  },
  {
    icon: Hangout,
    title: "Hangouts",
  },
  {
    icon: Wifi,
    title: "Wifi",
  },
  {
    icon: Cafe,
    title: "Cafe",
  },
  {
    icon: Light,
    title: "Bed Light",
  },
  {
    icon: Credit,
    title: "Credit card",
  },
  {
    icon: Mic,
    title: "Events",
  },
];

const About = ({ hostelData }) => {
  return (
    <div className="flex flex-col sm:flex-row w-11/12 md:w-10/12 mx-auto my-2 justify-center items-start gap-8">
      <div className="w-full sm:w-2/3 px-0 py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89] text-center sm:text-left">
            {hostelData?.header}
          </h1>
          <a href={hostelData?.bookingLink} target="_blank" rel="noreferrer">
            <button className="hidden md:block bg-[#116b89] hover:bg-[#0e5b74] p-3 px-8 my-4 rounded-md font-medium font-dmsans text-sm text-[#fff]">
              Book Now
            </button>
          </a>
        </div>
        <a href={hostelData?.bookingLink} target="_blank" rel="noreferrer">
          <button className="block md:hidden w-full bg-[#116b89] hover:bg-[#0e5b74] p-3 px-8 my-4 rounded-md font-medium font-dmsans text-sm text-[#fff]">
            Book Now
          </button>
        </a>
        <TextComponent text={hostelData?.info} maxLength={705} />
      </div>
      <div className="w-full sm:w-1/3 px-0 py-5">
        <div class="w-full sm:flex-grow py-2 mt-4 sm:mt-0">
          <h3 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
            Amenities
          </h3>
          <div class="flex items-center flex-wrap max-w-full">
            {amenities.map((amenity) => (
              <div class="flex items-center justify-start gap-2 my-2 pt-2 w-1/2 lg:w-1/3 relative group hover:scale-110 transition-all">
                <amenity.icon className="w-7 h-7 min-h-[20px] min-w-[20px]" />
                <span class="font-medium text-sm text-text text-[#4c4e4e] font-play">
                  {amenity.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
