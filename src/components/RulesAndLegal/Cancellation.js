import React from "react";

const Cancellation = () => {
  return (
    <div className="w-[100vw] min-h-screen flex flex-col justify-center items-center my-16">
      <h2 className="text-xl font-playfair font-semibold py-4 text-[#116b89]">
        Cancellation policy
      </h2>
      <p className="w-2/3 text-[#4c4e4e]">
        <span className="font-semibold">
          We understand that plans can change. Here's our cancellation policy:
        </span>
        <br></br>
        <br></br>
        Bookings made with the Lost Hostels are non refundable.
        <br></br>
        <br></br>
        No-shows will be charged the full amount.<br></br>
        <br></br>
        Changes to reservations are subject to availability and may incur
        additional charges.<br></br>
        <br></br>
      </p>
    </div>
  );
};

export default Cancellation;
