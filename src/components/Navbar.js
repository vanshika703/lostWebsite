import React from "react";

const Navbar = () => {
  return (
    <div className="h-[10vh] w-[100vw] flex justify-around items-center z-10">
      <h1 className="text-3xl font-semibold">The Lost Hostels</h1>
      <ul className="flex w-[60vw] justify-around items-center z-10">
        <li className="font-semibold">HOME</li>
        <li className="font-semibold">ABOUT US</li>
        <li className="font-semibold">LOCATIONS</li>

        <li className="font-semibold">TESTIMONIALS</li>
        <li className="font-semibold">GALLERY</li>
        <button>
          <li className="font-semibold">BOOK NOW</li>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
