import React from "react";

const Guest = () => {
  return (
    <div className="w-[100vw] min-h-screen flex flex-col justify-center items-center my-16">
      <h2 className="text-xl font-playfair font-semibold py-4 text-[#116b89]">
        Guest policy
      </h2>
      <p className="w-2/3 text-[#4c4e4e]">
        <span className="font-semibold">
          At The Lost Hostel, we aim to create a welcoming and enjoyable
          atmosphere for all guests.
        </span>
        <br></br>
        <br></br>
        <span className="font-semibold">
          We kindly request that you adhere to the following guest policies:
        </span>{" "}
        <br></br>
        <br></br>
        <span className="font-semibold">Respect Others: </span> Maintain a quiet
        and respectful environment, especially during quiet hours. Noise should
        be kept to a minimum. <br></br>
        <br></br>
        <span className="font-semibold">Cleanliness: </span>Keep common areas
        and dormitories tidy. Dispose of trash properly.
        <br></br>
        <br></br>
        <span className="font-semibold">Alcohol and Drugs:</span> Consumption of
        illegal substances is prohibited on our premises.<br></br>
        <br></br>
        <span className="font-semibold">Smoking:</span> Smoking is not allowed
        indoors. Designated smoking areas are provided. <br></br>
        <br></br>
        <span className="font-semibold">Behavior:</span> Any disruptive or
        disrespectful behavior toward fellow guests, staff, or property will not
        be tolerated.<br></br>
        <br></br>
        <span className="font-semibold">Damages:</span> Any intentional damage
        to property will result in additional charges.<br></br>
        <br></br>
        <span className="font-semibold">Compliance:</span> Guests are expected
        to comply with all hostel policies and local laws.
      </p>
    </div>
  );
};

export default Guest;
