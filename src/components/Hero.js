import { useState } from "react";
import DateInput from "./Date";

const Hero = () => {
  const [formData, setFormData] = useState({
    checkOutDate: null,
    checkInDate: null,
    hostel: "thelosthostelsgoapalolembeach",
    adult: 1,
    room: 1,
  });
  const [errors, setErrors] = useState({
    checkOutDate: null,
    checkInDate: null,
    hostel: false,
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
    console.log(formData);
    if (!formData.checkInDate) {
      setErrors({ ...errors, checkInDate: true });
      return;
    }
    if (!formData.checkOutDate) {
      setErrors({ ...errors, checkOutDate: true });
      return;
    }
    if (!formData.hostel) {
      setErrors({ hostel: true });
      return;
    }
    const checkInDate = new Date(formData.checkInDate);
    const checkoutDate = new Date(formData.checkOutDate);
    const daysDifference = Math.round(
      (checkoutDate - checkInDate) / (24 * 60 * 60 * 1000)
    );

    setErrors({
      hostel: false,
      checkInDate: false,
      checkoutDate: false,
    });

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
    <section className="hero relative min-h-screen w-[100vw] flex flex-col justify-center items-start text-white">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="hero-content relative mx-auto text-left sm:w-1/2"
      >
        <h1 className="text-3xl font-playfair italic text-left px-10 md:ml-10">
          S
          <span className="lowercase">
            ome BEAUTIFUL PATHS CAN ONLY BE DISCOVERED<br></br> WHEN YOU ARE
            LOST...
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row rounded-lg px-5 gap-0 sm:gap-2 lg:gap-0 py-2 my-5 justify-around items-center mx-auto w-1/2 md:w-full">
          <div className="flex flex-col w-full sm:w-fit">
            <label for="locations" className="text-xs uppercase font-medium">
              Location:
            </label>
            <select
              name="locations"
              className="bg-transparent  border-b-2 border-white py-2 hover:outline-none"
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
              <option value="185812" className="text-black">
                Welligama
              </option>
            </select>
            {errors.hostel && (
              <p className="text-xs pt-1 text-red-600">
                Please select a location
              </p>
            )}
            {!errors.hostel && <p className="mb-5"></p>}
          </div>
          <div className="flex flex-col hover:outline-none items-start">
            <label for="Checkin" className="text-xs uppercase font-medium">
              Checkin date
            </label>
            <DateInput onChange={onChangeCheckin} />
            {errors.checkInDate && (
              <p className="text-xs pt-1 text-red-600">Please select a date</p>
            )}
            {!errors.checkInDate && <p className="mb-5"></p>}
          </div>
          <div className="flex flex-col items-start">
            <label for="Checkout" className="text-xs uppercase">
              Checkout date
            </label>
            <DateInput onChange={onChangeChekout} />
            {errors.checkOutDate && (
              <p className="text-xs pt-1 text-red-600">Please select a date</p>
            )}
            {!errors.checkOutDate && <p className="mb-5"></p>}
          </div>
          <button
            className="border-2 border-white p-2 px-5  rounded-md font-medium font-dmsans text-lg w-max mt-5 sm:-mt-5"
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
