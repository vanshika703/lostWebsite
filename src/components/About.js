import about1 from "../img/about1.jpg";
import about2 from "../img/about2.JPG";
import about3 from "../img/about3.jpg";
import about5 from "../img/about5.JPG";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const About = () => {
  return (
    <div
      className="h-screen w-[100vw] flex flex-col sm:flex-row"
      id="our-story"
    >
      <div className=" w-[100vw] sm:w-[50vw] md:min-h-[100vh] flex justify-center items-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-1/2 h-3/4"
          navigation={true}
        >
          <SwiperSlide className="w-full h-full shadow-none">
            <img src={about1} alt="about" className="w-full shadow-none" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={about2}
              alt="about"
              className="w-full h-full shadow-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={about3}
              alt="about"
              className="w-full h-full shadow-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={about5}
              alt="about"
              className="w-full h-full shadow-none"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className=" w-[100vw] sm:w-[50vw] md:min-h-screen flex flex-col justify-center items-start mx-auto sm:pr-32 px-10"
      >
        <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
          Our Story
        </h1>
        <p className="text-[#4c4e4e]">
          Welcome to The Lost Hostels, where adventure and comfort come together
          to create a unique travel experience. Our hostels are designed for
          travellers seeking to explore new destinations, make new friends, and
          create unforgettable memories.<br></br>
          <br></br>
          At The Lost Hostels, we pride ourselves on providing affordable and
          comfortable accommodations in some of India's most famous
          destinations. Each hostel is strategically located, allowing guests to
          easily access the city's top attractions, nightlife, and cultural
          experiences.<br></br>
          <br></br>
          Whether you're a solo traveller or part of a group, The Lost Hostels
          offers the perfect blend of adventure and comfort. Book your stay with
          us today and get ready to discover India's most fascinating
          destinations.
        </p>
      </div>
    </div>
  );
};

export default About;
