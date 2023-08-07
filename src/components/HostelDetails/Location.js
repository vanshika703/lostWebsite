import React from "react";
import { ReactComponent as Eatery } from "../../icons/restaurant.svg";
import { ReactComponent as Beach } from "../../icons/beach.svg";

const nearbyPlaces = [
  {
    icon: Beach,
    distance: "1 km",
    place: "Palolem Beach",
  },
  {
    icon: Beach,
    distance: "1.8 km",
    place: "Patnem Beach",
  },
  {
    icon: Beach,
    distance: "6.3 km",
    place: "Butterfly Beach",
  },
  {
    icon: Eatery,
    distance: "1.1 km",
    place: "Kala Bahia",
  },
  {
    icon: Eatery,
    distance: "270 m",
    place: "The Mill",
  },
  {
    icon: Eatery,
    distance: "4.3 km",
    place: "Leopard Valley",
  },
  {
    icon: Eatery,
    distance: "700 m",
    place: "Art Resort",
  },
  {
    icon: Beach,
    distance: "8.4 km",
    place: "Agonda Beach",
  },
  {
    icon: Beach,
    distance: "23 km",
    place: "Cabo de Rama",
  },
];

const Location = () => {
  return (
    <div className="sm:mx-28 flex flex-col sm:flex-row justify-center items-start">
      <div className="sm:w-5/12">
        <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
          Around the Lost Hostel Palolem
        </h1>
        <ul className="flex flex-wrap ">
          {nearbyPlaces.map((nearbyPlace) => (
            <li className="flex w-1/3 justify-start items-center p-2 m-2 rounded-md">
              <nearbyPlace.icon className="mr-2"/>
              <p className="text-[#116b89] font-semibold mr-2 text-lg font-playfair">
                {nearbyPlace.place}
              </p>
              <span className="text-[#a9a9a9]">{nearbyPlace.distance}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:w-7/12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.698700959404!2d74.02679797466475!3d15.009421566937812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe45122f2adc77%3A0xfb96c92f9f1b0bd8!2sThe%20Lost%20Hostel%2C%20Goa%20-%20Palolem%20Beach!5e0!3m2!1sen!2sin!4v1691260417488!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="maps"
          className="w-[100vw] sm:w-full h-[50vh] p-5"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
