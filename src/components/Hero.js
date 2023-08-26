import { useState } from "react";
import DateInput from "./Date";

const Hero = () => {
  const [formData, setFormData] = useState({
    checkOutDate: new Date(+new Date() + 96400000 * 1)
      .toISOString()
      .split("T")[0],
    checkInDate: new Date().toISOString().split("T")[0],
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

    console.log(daysDifference);
    if (daysDifference <= 0) {
      setErrors({ ...errors, checkOutDate: true });
      return;
    }

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
    // const checkInDate = new Date(value);
    // const checkoutDate = new Date(formData.checkOutDate);
    // const daysDifference = Math.round(
    //   (checkoutDate - checkInDate) / (24 * 60 * 60 * 1000)
    // );

    // console.log(daysDifference);
    // console.log(
    //   new Date(+new Date(value) + 96400000 * 1).toISOString().split("T")[0]
    // );
    // if (daysDifference < 0) {
    //   setFormData({
    //     ...formData,
    //     checkInDate: value,
    //     checkOutDate: new Date(+new Date(value) + 96400000 * 1)
    //       .toISOString()
    //       .split("T")[0],
    //   });
    // }
    setFormData({ ...formData, checkInDate: value });
  };
  return (
    <section
      className="hero relative min-h-screen w-[100vw] flex flex-col justify-center items-start text-white"
      id="home"
    >
      <div className="hero-content relative mx-auto text-left md:w-7/12">
        <h1 className=" text-3xl sm:text-5xl font-playfair text-center px-10 md:ml-0 mt-12 sm:mt-20 leading-snug">
          S
          <span className="lowercase">
            ome BEAUTIFUL PATHS CAN ONLY BE DISCOVERED WHEN YOU ARE LOST...
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row rounded-lg px-5 gap-0 sm:gap-5 lg:gap-10 py-2 my-5 justify-around items-center mx-auto md:w-2/3 mt-16">
          <div className="flex flex-col w-full sm:w-fit cursor-pointer">
            <label for="locations" className="text-base uppercase font-medium">
              Location:
            </label>
            <select
              name="locations"
              className="bg-transparent  border-b-2 border-white py-2 hover:outline-none text-xl"
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
                Palolem, South Goa
              </option>
              <option
                value="thelosthostelvarkalahelipad"
                className="text-black"
              >
                Varkala, Kerela
              </option>
              <option
                value="thelosthostelsbirbillinglandingsite"
                className="text-black"
              >
                Bir, Himachal Pradesh
              </option>
              <option value="185812" className="text-black">
                Weligama, Sri Lanka
              </option>
            </select>
            {errors.hostel && (
              <p className="text-xs pt-1 text-red-600">
                Please select a location
              </p>
            )}
            {!errors.hostel && <p className="mb-8"></p>}
          </div>
          <div className="flex flex-col hover:outline-none items-start cursor-pointer relative w-full">
            <label
              for="Checkin"
              className="flex items-center text-base uppercase font-medium"
            >
              Checkin date:
              {/* <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[38px] left-28"
              >
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"></path>
                <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"></path>
              </svg> */}
            </label>
            <DateInput
              onChange={onChangeCheckin}
              min={new Date().toISOString().split("T")[0]}
              defaultValue={new Date().toISOString().split("T")[0]}
            />
            {errors.checkInDate && (
              <p className="text pt-1 text-red-600">Please select a date</p>
            )}
            {!errors.checkInDate && <p className="mb-8"></p>}
          </div>
          <div className="flex flex-col items-start cursor-pointer relative w-full">
            <label
              for="Checkout"
              className="flex items-center text-base uppercase"
            >
              Checkout date:
              {/* <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[38px] left-28"
              >
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"></path>
                <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"></path>
              </svg> */}
            </label>
            <DateInput
              onChange={onChangeChekout}
              min={
                new Date(+new Date() + 96400000 * 1).toISOString().split("T")[0]
              }
              defaultValue={
                new Date(+new Date() + 96400000 * 1).toISOString().split("T")[0]
              }
              value={formData.checkOutDate}
            />
            {errors.checkOutDate && (
              <p className="text pt-1 text-red-600">Invalid Date</p>
            )}
            {/* {+new Date(formData.checkInDate) >
              +new Date(formData.checkOutDate) && (
              <p className="text pt-1 text-red-600">Invalid Date</p>
            )} */}
            {!errors.checkOutDate && <p className="mb-8"></p>}
          </div>
          <button
            className="border-2 border-white p-2 px-5 min-w-max rounded-md font-medium font-dmsans text-lg w-full mt-5 sm:-mt-5 hover:bg-black hover:bg-opacity-40 duration-200 ease-in"
            onClick={forwardUser}
          >
            Book Now
          </button>
        </div>
      </div>
      <div class="down-arrow"></div>
    </section>
  );
};

export default Hero;
