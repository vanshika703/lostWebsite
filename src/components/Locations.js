import GOA_IMG from "../img/Goa.JPG";
import SRILANKA_IMG from "../img/Srilanka.jpg";
import VARKALA_IMG_1 from "../img/varkala1.jpg";
import VARKALA_IMG_2 from "../img/varkala2.png";
import BIR from "../img/bir.jpg";
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
    <div className="h-[100vh] w-[100vw] flex flex-col justify-around items-center">
      <h1 className="text-3xl font-playfair font-semibold text-[#008DBB]">
        Our Locations
      </h1>
      <Swiper
        allowTouchMove={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={SRILANKA_IMG} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#008DBB] font-playfair font-semibold text-lg mb-1">
              Weligama
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              In the lap of South Goa, The Lost Hostel is a budget-friendly
              accommodation offering a garden, indoor games and shared
              dormitories.
            </p>
            <button className="font-medium text-sm text-[#008DBB] underline decoration-[1.5px]">
              BOOK NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={GOA_IMG} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#008DBB] font-playfair font-semibold text-lg mb-1">
              South Goa
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              In the lap of South Goa, The Lost Hostel is a budget-friendly
              accommodation offering a garden, indoor games and shared
              dormitories.
            </p>
            <button className="font-medium text-sm text-[#008DBB] underline decoration-[1.5px]">
              BOOK NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={VARKALA_IMG_1} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#008DBB] font-playfair font-semibold text-lg mb-1">
              Varkala
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              Located along the famous cliffs and beaches of Varkala, The Lost
              Hostel offers enthralling stays complete with exciting outdoor and
              indoor activities.
            </p>
            <button className="font-medium text-sm text-[#008DBB] underline decoration-[1.5px]">
              BOOK NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={BIR} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#008DBB] font-playfair font-semibold text-lg mb-1">Bir</h3>
            <p className="text-sm text-[#a9a9a9]">
              Located near the Paragliding landing site, The Lost Hostels Bir
              offers river stream & mountain view with unique facilities in a
              relaxing and peaceful atmosphere.
            </p>
            <button className="font-medium text-sm text-[#008DBB] underline decoration-[1.5px]">
              BOOK NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={SRILANKA_IMG} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#008DBB] font-playfair font-semibold text-lg mb-1">
              Weligama
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              In the lap of South Goa, The Lost Hostel is a budget-friendly
              accommodation offering a garden, indoor games and shared
              dormitories.
            </p>
            <button className="font-medium text-sm text-[#008DBB] underline decoration-[1.5px]">
              BOOK NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={GOA_IMG} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#008DBB] font-playfair font-semibold text-lg mb-1">
              South Goa
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              In the lap of South Goa, The Lost Hostel is a budget-friendly
              accommodation offering a garden, indoor games and shared
              dormitories.
            </p>
            <button className="font-medium text-sm text-[#008DBB] underline decoration-[1.5px]">
              BOOK NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={VARKALA_IMG_1} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#008DBB] font-playfair font-semibold text-lg mb-1">
              Varkala
            </h3>
            <p className="text-sm text-[#a9a9a9]">
              Located along the famous cliffs and beaches of Varkala, The Lost
              Hostel offers enthralling stays complete with exciting outdoor and
              indoor activities.
            </p>
            <button className="font-medium text-sm text-[#008DBB] underline decoration-[1.5px]">
              BOOK NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={BIR} alt="goa" className="rounded-md shadow-lg" />
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#008DBB] font-playfair font-semibold text-lg mb-1">Bir</h3>
            <p className="text-sm text-[#a9a9a9]">
              Located near the Paragliding landing site, The Lost Hostels Bir
              offers river stream & mountain view with unique facilities in a
              relaxing and peaceful atmosphere.
            </p>
            <button className="font-medium text-sm text-[#008DBB] underline decoration-[1.5px]">
              BOOK NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Locations;
