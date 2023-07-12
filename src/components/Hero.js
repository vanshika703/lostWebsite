import React from "react";
import heroimg from "../img/TheLostHostel.png";

const Hero = () => {
  return (
    <div className="w-[100vw] h-[90vh]">
      <img src={heroimg} alt="hero" className="w-[95vw] h-[95vh] -mt-12 z-0 mx-auto" />
    </div>
  );
};

export default Hero;
