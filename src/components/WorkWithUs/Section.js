import React from "react";

const Section = ({ title, text, buttonLabel, image, isImageRight }) => {
  return (
    <section className="py-16 px-5 sm:px-28 md:flex">
      {isImageRight && (
        <>
          <div className="md:w-1/2">
            <img src={image} alt={title} className="w-96 mx-auto" />
          </div>
          <div className="md:w-1/2 md:ml-8 md:mr-8 md:mt-0">
            <h2 className="text-xl font-playfair font-semibold py-4 text-[#116b89]">
              {title}
            </h2>
            <p className="text-[#4c4e4e] w-11/12">{text}</p>
            <a
              href={
                title === "As a Volunteer"
                  ? "https://tally.so/r/3EdMpr"
                  : "#contactus"
              }
              className=""
            >
              <button className="bg-[#116b89] hover:bg-[#0e5b74] p-3 px-5 my-4 rounded-md font-medium font-dmsans text-sm text-[#fff]">
                {buttonLabel}
              </button>
            </a>
          </div>
        </>
      )}
      {!isImageRight && (
        <>
          <div className="w-full md:w-1/2 md:ml-8 md:mr-8 md:mt-0 w-full">
            <h2 className="text-xl font-playfair font-semibold py-4 text-[#116b89]">
              {title}
            </h2>
            <p className="text-[#4c4e4e] w-11/12">{text}</p>
            <a
              href={
                title === "As a Volunteer"
                  ? "https://tally.so/r/3EdMpr"
                  : "#contactus"
              }
              className=""
            >
              <button className="bg-[#116b89] hover:bg-[#0e5b74] p-3 px-5 my-4 rounded-md font-medium font-dmsans text-sm text-[#fff]">
                {buttonLabel}
              </button>
            </a>
          </div>
          <div className="md:w-1/2">
            <img src={image} alt={title} className="w-96 mx-auto" />
          </div>
        </>
      )}
    </section>
  );
};

export default Section;
