import React from "react";
import BookNow from "../BookNow";
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
    title: "Water",
  },
  {
    icon: Laundry,
    title: "Laundry",
  },
  {
    icon: Hangout,
    title: "Hangout",
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
    title: "Light",
  },
  {
    icon: Credit,
    title: "Credit",
  },
  {
    icon: Mic,
    title: "Mic",
  },
];

const About = () => {
  return (
    <div className=" flex flex-col sm:flex-row sm:mx-28 my-2 justify-center items-start">
      <div className="sm:w-1/2 p-5">
        <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
          Lost Hostel Goa
        </h1>
        <p className="text-[#a9a9a9]">
          Located in the heart of South Goa, just a stone throw away from the
          famous Palolem beach & other beaches of the area. The Lost Hostel, Goa
          is based on a theme of varieties of hooks, since we are all hooked on
          to something, whether it's a job, a passion or a feeling. We Provide
          you with enough hooks to hang your worries and enjoy the time here.
          <br></br>
          <br></br>Our goal is to make you feel home away from home with our
          unique facilities in a peaceful and relaxing atmosphere. In our huge
          garden with loads of space to relax and chill, we always have a fridge
          full of beer to serve to our lost souls. You can secure stuff in the
          free luggage lockers. We've got CCTV to help keep you safe and laundry
          facilities if you need to freshen up your backpacking gear. We have
          board games for a laid-back afternoon and movie nights for these long
          cozy nights. When you want some quiet time check out the book exchange
          or use the free Wi-Fi to catch up with family at home. <br></br>
          <br></br>Looking for any recommendations for making the best out of
          your time in Goa? Our staff can sort it out for you. We strive to
          ensure that our travelers get to stay with us as a part of the family.
        </p>
        <button className="border-2 border-[#116b89] p-2 px-5 my-4 rounded-md font-medium font-dmsans text-lg text-[#116b89]">
          Book Now
        </button>
      </div>
      <div className="sm:w-1/2 p-5">
        <div class="w-full sm:flex-grow py-2 mt-4 sm:mt-0">
          <h3 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
            Amenities
          </h3>
          <div class="flex items-center flex-wrap max-w-full">
            {amenities.map((amenity) => (
              <div class="flex items-center pr-4 pt-2 w-1/3 flex-shrink-0 relative group hover:scale-110 transition-all ">
                <amenity.icon className="w-10 h-10 m-3" />
                <span class="font-medium text-lg text-text text-[#a9a9a9] font-play">
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
