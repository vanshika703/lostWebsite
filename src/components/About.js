import about1 from "../img/about1.webp";
import about2 from "../img/about2.webp";
import about3 from "../img/about3.webp";
import about5 from "../img/about5.webp";
import { useEffect } from "react";
import lottie from 'lottie-web'
import swipe from '../img/swipe.json'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const About = () => {

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#swipe"),
      animationData: swipe
    });
  }, []);

  return (
    <div
      className="w-[100vw] flex flex-col sm:flex-row"
      id="our-story"
    >
      <div className=" w-[100vw] sm:w-[50vw] md:min-h-[100vh] flex justify-center items-center relative">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-1/2 h-60 sm:h-2/3 mt-10"
        >
          <SwiperSlide className="w-full h-full shadow-none">
            <img
              src={about1}
              alt="about"
              className="w-full h-full shadow-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={about2}
              alt="about"
              className="w-full h-full shadow-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={about3}
              alt="about"
              className="w-full h-full shadow-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={about5}
              alt="about"
              className="w-full h-full shadow-none"
            />
          </SwiperSlide>
        </Swiper>
        <div id="swipe" className="absolute z-50 w-32"/>
      </div>
      <div className=" w-[100vw] sm:w-[50vw] md:min-h-screen flex flex-col justify-center items-start mx-auto sm:pr-32 px-10">
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
          comfortable accommodations in some of India and Sri Lanka's most famous
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
