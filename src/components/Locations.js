import GOA_IMG from "../img/GOA.png";
import BIR from "../img/bir.jpg";
import varkalaimg from "../img/varkala.jpg";
import weligamaimg from "../img/weligama.jpg";
import hiriketiyaimg from "../img/hirektya.jpg";
import comingsoonimg from "../img/COMING SOON.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Locations = () => {
  return (
    <div
      className="h-[150vh] w-[100vw] flex flex-col justify-around items-center pt-14"
      id="destinations"
    >
      <h1 className="text-3xl font-playfair font-semibold text-[#116b89] my-5">
        Newest Destinations
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper locationslider"
      >
        <SwiperSlide className="relative">
          <img
            src={weligamaimg}
            alt="weligamaimg"
            className="rounded-md shadow-lg"
          />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
              Weligama
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              50m from the bustling surfers paradise of Weligama beach, the
              hostel offers peaceful accommodation with a garden, yoga area,
              indoor games and shared dorms
            </p>
            <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
              Book Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hiriketiyaimg}
            alt="hiriketiyaimg"
            className="rounded-md shadow-lg"
          />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
              Hiriketiya
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              50m from the bustling surfers paradise of Weligama beach, the
              hostel offers peaceful accommodation with a garden, yoga area,
              indoor games and shared dorms
            </p>
            <a
              href="https://live.ipms247.com/booking/book-rooms-thelosthostelsgoapalolembeach"
              target="_blank"
            >
              <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
                Book Now
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={comingsoonimg}
            alt="comingsoonimg"
            className="rounded-md shadow-lg"
          />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
              Coming soon
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
      <h1 className="text-3xl font-playfair font-semibold text-[#116b89] my-5 pt-8">
        Explore more Destinations
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper locationslider"
      >
        <SwiperSlide>
          <img src={GOA_IMG} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
              South Goa - Palolem
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              In the lap of South Goa, The Lost Hostel is a budget-friendly
              accommodation offering a garden, indoor games and shared
              dormitories.
            </p>
            <a
              href="https://live.ipms247.com/booking/book-rooms-thelosthostelsgoapalolembeach"
              target="_blank"
            >
              <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
                Book Now
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={varkalaimg} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
              Varkala - Helipad
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              Located along the famous cliffs and beaches of Varkala, The Lost
              Hostel offers enthralling stays complete with exciting outdoor and
              indoor activities.
            </p>
            <a
              href="https://live.ipms247.com/booking/book-rooms-thelosthostelvarkalahelipad"
              target="_blank"
            >
              <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
                Book Now
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={BIR} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
              Bir - Landing Site
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              Located near the Paragliding landing site, The Lost Hostels Bir
              offers river stream & mountain view with unique facilities in a
              relaxing and peaceful atmosphere.
            </p>
            <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
              Book Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Locations;
