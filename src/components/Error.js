import React from "react";
import errorimg from "../img/error.svg"
import { HashLink } from "react-router-hash-link";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center m-10 p-10">
      <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
        Error : 404
      </h1>
      <img src={errorimg} alt="error" className="w-1/3 m-5 "/>
      <p>You seem to be lost.</p>
      <p>Go back to <HashLink to="/" className="underline">Home</HashLink>.</p>
    </div>
  );
};

export default Error;
