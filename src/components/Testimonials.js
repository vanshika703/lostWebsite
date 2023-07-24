import QUOTE_IMG from "../img/quote.png";
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

const Testimonials = () => {
  return (
    <section className="relative h-[100vh] w-[100vw] testimonials flex sm:justify-end justify-center items-center sm:pr-28 px-2">
      <div className="sm:w-1/2 w-[90vw] h-[60vh] sm:h-96 bg-[#116b89] relative opacity-80 rounded-md shadow-md">
        <Swiper
          allowTouchMove={true}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper w-full h-full rounded-md bg-[#116b89]"
        >
          <SwiperSlide>
            <div className="bg-[#116b89] h-full flex flex-col justify-center items-center p-10 sm:p-20 text-white relative rounded-md shadow-md">
              <img
                src={QUOTE_IMG}
                className="absolute top-10 left-10 opacity-40 w-12"
              />
              <h1 className="text-2xl font-medium font-playfair">
                Amazing staff and <br></br>Memorable experience!
              </h1>
              <p className="italic my-8">
                I had an incredible stay at the lost hostel. The staff was
                exceptional, welcoming, and went above and beyond to make me
                feel at home. The hostel itself had a cozy atmosphere, and the
                common areas were clean and well-maintained.
              </p>

              <p className="text-sm text-[#8cb6c4]">
                by Ardra Malviya . Business Traveller . Jul 03, 2023
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#116b89] h-full flex flex-col justify-center items-center p-10 sm:p-20 text-white relative rounded-md shadow-md">
              <img
                src={QUOTE_IMG}
                className="absolute top-10 left-10 opacity-40 w-12"
              />
              <h1 className="text-2xl font-medium font-playfair">
                Excellent Stay!
              </h1>
              <p className="italic my-8">
                Best hostel in south goa. Clean and amazing property. Filled
                with fun games, great manager, live bar/food counter. A very
                lively and happening place. Very close to beach and bike
                rentals. Highly recommended for solo travellers.
              </p>

              <p className="text-sm text-[#8cb6c4]">by Omkar Karandikar . . Jun 20, 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#116b89] h-full flex flex-col justify-center items-center p-10 sm:p-20 text-white relative rounded-md shadow-md">
              <img
                src={QUOTE_IMG}
                className="absolute top-10 left-10 opacity-40 w-12"
              />
              <h1 className="text-2xl font-medium font-playfair">
                Best hostel in Goa
              </h1>
              <p className="italic my-8">
                I stayed over there for 2 days and it was beautiful. The night
                was fun with all the music (other travelers) and lighting. The
                beach is just 1 km away so you can easily visit it at night. The
                staff is friendly and helpful.
              </p>

              <p className="text-sm text-[#8cb6c4]">
                {" "}
                by Swaroop Singh . Solo Traveller . Apr 05, 2023
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
