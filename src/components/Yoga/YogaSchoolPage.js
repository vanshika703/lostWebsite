import React from "react";
import beachImage from "../../img/yoga-main.jpg";
import yoga1 from "../../img/yoga1.svg";
import yoga2 from "../../img/yoga2.svg";
import yoga3 from "../../img/yoga3.svg";
import yoga4 from "../../img/yoga4.svg";
import yoga5 from "../../img/yoga5.svg";
import yoga6 from "../../img/yoga6.svg";


import img1 from "../../img/yogaimg1.JPG";
import img2 from "../../img/yogaimg2.JPG";
import img3 from "../../img/yogaimg3.JPG";
import img4 from "../../img/yogaimg4.JPG";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const YogaSchoolPage = () => {
  return (
    <div className="m-0 p-0">
      <div className="yogaHero w-[95vw] h-[80vh] mt-[14vh] mx-auto relative rounded-md text-center">
        <div className="absolute top-32 sm:top-[200px] sm:left-72">
          <h1 className="text-3xl sm:text-5xl font-playfair font-semibold py-4 text-[#116b89]">
            The Lost Yoga School
          </h1>

          <p className="text-white text-xl font-medium">
            Community | Mindfulness | Wellness
          </p>
        </div>
        <p className="text-white text-2xl absolute sm:right-10 sm:top-10 font-playfair italic">
          "Discover Inner Peace and Harmony"
        </p>
      </div>
      <div
        className="w-[100vw] flex flex-col sm:flex-row sm:-mt-20"
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
                src={img1}
                alt="about"
                className="w-full h-full shadow-none"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                alt="about"
                className="w-full h-full shadow-none"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                alt="about"
                className="w-full h-full shadow-none"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img4}
                alt="about"
                className="w-full h-full shadow-none"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" w-[100vw] sm:w-[50vw] md:min-h-screen flex flex-col justify-center items-start mx-auto sm:pr-32 px-10">
          <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
            Welcome to The Lost Yoga School
          </h1>
          <p className="text-[#4c4e4e]">
            Find peace and balance at Lost Yoga School in beautiful Varkala. We
            offer yoga classes for everyone, guided by experienced instructors.
            Our school is located in a serene beachfront setting, perfect for
            practicing mindfulness and wellness.
            <br></br>
            <br></br>
            Whether you're new to yoga or an experienced practitioner, Lost Yoga
            School provides a place to explore the benefits of yoga, meditation,
            and mindful living. Let our skilled instructors lead you through
            revitalizing yoga sessions to rejuvenate your body and mind.
            <br></br>
            <br></br>
            In this peaceful Varkala environment, you'll not only experience the
            joys of yoga but also connect with a supportive community of
            like-minded individuals. Join us on a journey to discover a deeper
            sense of well-being and self.
          </p>
        </div>
      </div>
      <section className="flex flex-wrap justify-center items-center p-8 space-y-6 lg:space-x-12">
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
          <img
            src={yoga3}
            alt="Experienced Instructors"
            className="rounded-full w-40 h-40 mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
          />
          <p className="mt-2 font-medium">Experienced Instructors</p>
          <p className="text-gray-500">Learn from seasoned yoga teachers.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
          <img
            src={yoga2}
            alt="Secluded Beach Location"
            className="rounded-full w-40 h-40 object-cover mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
          />
          <p className="mt-2 font-medium">Secluded Beach Location</p>
          <p className="text-gray-500">Practice yoga in a serene seaside location.</p>

        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
          <img
            src={yoga1}
            alt="Yoga Workshops and Retreats"
            className="rounded-full w-40 h-40 object-cover mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
          />
          <p className="mt-2 font-medium">Yoga Workshops and Retreats</p>
          <p className="text-gray-500">Discover the art of mindful living.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
          <img
            src={yoga4}
            alt="Sound Healing Therapy"
            className="rounded-full w-40 h-40 object-cover mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
          />
          <p className="mt-2 font-medium">Sound Healing Therapy</p>
          <p className="text-gray-500">Experience the soothing power of sound for relaxation and well-being.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
          <img
            src={yoga5}
            alt="Wellness Retreats"
            className="rounded-full w-40 h-40 object-cover mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
          />
          <p className="mt-2 font-medium">Wellness Retreats</p>
          <p className="text-gray-500">Embark on rejuvenating wellness getaways.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
          <img
            src={yoga6}
            alt="Wellness Retreats"
            className="rounded-full w-40 h-40 mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
          />
          <p className="mt-2 font-medium">Community Driven</p>
          <p className="text-gray-500">Connect with like-minded individuals on your journey to well-being.</p>
        </div>
      </section>
      <section className="flex flex-wrap justify-center items-center p-8 space-y-4 lg:space-y-0 px-5 sm:px-28">
        <div className="w-full lg:w-1/2 mx-auto">
          <div className="bg-gray-300 rounded-lg overflow-hidden hover:shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5265037194877!2d76.70118427458283!3d8.736429693500932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ef3fb297d579%3A0xb53a7fa5b5a8949d!2sLost%20Yoga%20School!5e0!3m2!1sen!2sin!4v1696434592287!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="maps"
              className="w-full h-[50vh]"
            ></iframe>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-left flex flex-col justify-center items-start pl-10">
          <p  className="text-2xl font-playfair font-semibold text-[#116b89]">Location:</p>
          <p>Lost Hostel Roof Top, Helipad Cliff, Varkala Beach, Kerala.</p>
          <p  className="text-2xl font-playfair font-semibold text-[#116b89] mt-5">Contact Details:</p>
          <p>+91 7012416343</p>
          <p>events@thelosthostels.com</p>
          <p>@thelosthostels</p>
        </div>
      </section>
    </div>
  );
};

export default YogaSchoolPage;
