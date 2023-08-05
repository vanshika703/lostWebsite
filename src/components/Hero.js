import { useState } from "react";
import DateInput from "./Date";

const navItems = ["Home", "About us", "Locations", "Gallery", "Testimonials"];

const Hero = () => {
  const [formData, setFormData] = useState({
    checkOutDate: null,
    checkInDate: null,
    hostel: "thelosthostelsgoapalolembeach",
    adult: 1,
    room: 1,
  });

  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0], // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "-" + month + "-" + year;
  }

  // TOOD:
  /*
  1. Default value
  2. Validation
  3. Nights bug

  */
  const forwardUser = () => {
    const checkInDate = new Date(formData.checkInDate);
    const checkoutDate = new Date(formData.checkOutDate);
    const daysDifference = Math.round(
      (checkoutDate - checkInDate) / (24 * 60 * 60 * 1000)
    );

    window.open(
      `https://live.ipms247.com/booking/mroominfo.php?HotelId=${
        formData.hostel
      }&eZ_chkout=${formatDate(formData.checkOutDate)}&eZ_chkin=${formatDate(
        formData.checkInDate
      )}&eZ_Nights=${daysDifference}&eZ_adult=${formData.adult}&eZ_room=${
        formData.room
      }&executepage=mroominfo`,
      "_blank"
    );
  };

  const onChangeChekout = (value) => {
    setFormData({ ...formData, checkOutDate: value });
  };
  const onChangeCheckin = (value) => {
    console.log("setting checkin date", value);
    setFormData({ ...formData, checkInDate: value });
  };
  return (
    <section className="hero relative h-[100vh] w-[100vw] flex flex-col justify-center items-start text-white">
      <div className="fixed top-0 left-0 w-[100vw] bg-transparent h-[10vh] flex justify-between items-center sm:px-28 px-5 font-medium navbar z-20">
        <p className="text-xl font-playfair relative">The Lost Hostels</p>
        <ul className="sm:flex w-[40VW] justify-between text-sm hidden font-dmsans relative">
          {navItems.map((navItem, index) => (
            <li className="uppercase tracking-wider">{navItem}</li>
          ))}
        </ul>
      </div>
      <div className="hero-content relative mx-auto text-center ">
        <h1 className="text-5xl font-playfair">Lost with us.</h1>
        <div className="flex flex-col sm:flex-row border-2 border-white rounded-lg px-5 md:px-10 py-2 my-5 justify-around items-center gap-2 md:gap-16">
          <div className="flex flex-col">
            <label for="locations" className="text-lg">
              Location:
            </label>
            <select
              name="locations"
              id="locations"
              className="bg-transparent  border-b-2 border-white p-2 hover:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, hostel: e.target.value })
              }
              value={formData.hostel}
              defaultValue="thelosthostelsgoapalolembeach"
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
            <DateInput onChange={onChangeCheckin} />
          </div>
          <div className="flex flex-col">
            <label for="Checkout" className="text-lg">
              Checkout date:
            </label>
            <DateInput onChange={onChangeChekout} />
          </div>
          <button
            className="border-2 border-white p-2 px-5 my-4 rounded-md font-medium font-dmsans text-lg w-max"
            onClick={() => {
              forwardUser();
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
