import React from "react";
import errorimg from "../img/error.svg";
import { HashLink } from "react-router-hash-link";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center m-10 p-10">
        <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
          Great things are coming!
        </h1>
        <img src={errorimg} alt="error" className="sm:w-1/3 m-5 " />
        <p>We are working hard so you do not have to see this page in the future.</p>
        <p>
          In the meanwhile, chill at one of our hostels🌊
          <HashLink to="/" className="underline">
            Book Here
          </HashLink>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Error;
