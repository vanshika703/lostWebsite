import { useState } from "react";
import BookNow from "./BookNow";


const Hero = () => {
  const [location, setLocation] = useState("thelosthostelsgoapalolembeach");

  return (
    <section className="hero relative h-[100vh] w-[100vw] flex flex-col justify-center items-start text-white">
     
      <div className="hero-content relative mx-auto text-center w-1/2">
        <h1 className="text-5xl font-playfair">Lost with us.</h1>
        <div className="flex flex-col sm:flex-row border-2 border-white rounded-lg px-5 py-2 my-5 justify-around items-center">
          <div className="flex flex-col">
            <label for="locations" className="text-lg">
              Location:
            </label>
            <select
              name="locations"
              id="locations"
              className="bg-transparent  border-b-2 border-white p-2 hover:outline-none"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option
                value="thelosthostelsgoapalolembeach"
                className="text-black"
              >
                Goa
              </option>
              <option
                value="thelosthostelvarkalahelipad"
                className="text-black"
              >
                Varkala
              </option>
              <option
                value="thelosthostelsbirbillinglandingsite"
                className="text-black"
              >
                Bir
              </option>
              <option value="Welligama" className="text-black">
                Welligama
              </option>
            </select>
          </div>
          <div className="flex flex-col hover:outline-none">
            <label for="Checkin" className="text-lg">
              Checkin date:
            </label>
            <input
              type="date"
              id="Checkin"
              name="Checkin"
              className="bg-transparent border-b-2 border-white p-2 hover:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label for="Checkout" className="text-lg">
              Checkout date:
            </label>
            <input
              type="date"
              id="Checkout"
              name="Checkout"
              className="bg-transparent border-b-2 border-white p-2 hover:outline-none"
            />
          </div>
          <BookNow/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
