import React from "react";

const Header = () => {
  return (
    <header
      className="text-center py-8 mt-40 flex flex-col items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
        Work With Us
      </h1>
      <p className="text-[#4c4e4e] w-1/2">
        As we get bigger, we're making more and more cool stuff happen. If
        you're into what we're all about, why not join us and be part of our
        awesome journey? Let's team up and discover the cool things we can do
        together!
      </p>
    </header>
  );
};

export default Header;
