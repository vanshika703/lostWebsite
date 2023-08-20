import GOA_IMG from "../img/goa.webp";
import BIR from "../img/bir.webp";
import varkalaimg from "../img/varkala.webp";
import weligamaimg from "../img/weligama.webp";
import hiriketiyaimg from "../img/hiriketiya.webp";
import comingsoonimg from "../img/beach.webp";
import { Link } from "react-router-dom";
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
    <section
      className="h-[150vh] w-[100vw] flex flex-col justify-around items-center pt-14"
      id="locations"
    >
      <h1 className="text-3xl font-playfair font-semibold text-[#116b89] mt-16 sm:my-5 mb-4">
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
          <Link to="/hostel/weligama">
            <div className="overflow-hidden rounded-md w-full h-full">
              <img
                src={weligamaimg}
                alt="weligamaimg"
                className="rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in"
              />
            </div>
            <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
              <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
                Weligama, Sri Lanka
              </h3>
              <p className="text-sm text-[#4c4e4e]">
                50m from the bustling surfers paradise of Weligama beach, the
                hostel offers peaceful accommodation with a garden, yoga area,
                indoor games and shared dorms
              </p>
              <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
                Know More
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden rounded-md w-full h-full">
            <img
              src={hiriketiyaimg}
              alt="hiriketiyaimg"
              className="rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in"
            />
          </div>
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
              Hiriketiya, Sri Lanka
            </h3>
            <p className="text-sm text-[#4c4e4e]">
              50m from the bustling surfers paradise of Weligama beach, the
              hostel offers peaceful accommodation with a garden, yoga area,
              indoor games and shared dorms
            </p>
            <a
              href="https://live.ipms247.com/booking/book-rooms-thelosthostelsgoapalolembeach"
              target="_blank"
              rel="noreferrer"
            >
              <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
                Know More
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden rounded-md w-full h-full">
            <img
              src={comingsoonimg}
              alt="comingsoonimg"
              className="rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in"
            />
          </div>
          <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
            <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
              Where do you want to see us next?
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
          <Link to="/hostel/goa">
            <div className="overflow-hidden rounded-md w-full h-full">
              <img
                src={GOA_IMG}
                alt="goa"
                className="rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in"
              />
            </div>
            <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
              <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
                Palolem, South Goa
              </h3>
              <p className="text-sm text-[#4c4e4e]">
                In the lap of South Goa, The Lost Hostel is a budget-friendly
                accommodation offering a garden, indoor games and shared
                dormitories.
              </p>
              <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
                Know More
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/hostel/varkala">
            <div className="overflow-hidden rounded-md w-full h-full">
              <img
                src={varkalaimg}
                alt="varkala"
                className="rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in"
              />
            </div>
            <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
              <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
                Varkala, Kerela
              </h3>
              <p className="text-sm text-[#4c4e4e]">
                Located along the famous cliffs and beaches of Varkala, The Lost
                Hostel offers enthralling stays complete with exciting outdoor
                and indoor activities.
              </p>
              <a
                href="https://live.ipms247.com/booking/book-rooms-thelosthostelvarkalahelipad"
                target="_blank"
                rel="noreferrer"
              >
                <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
                  Know More
                </button>
              </a>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/hostel/bir">
            <div className="overflow-hidden rounded-md w-full h-full">
              <img
                src={BIR}
                alt="bir"
                className="rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in"
              />
            </div>
            <div className="bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md">
              <h3 className=" text-[#116b89] font-playfair font-semibold text-lg mb-1">
                Bir, Himachal Pradesh
              </h3>
              <p className="text-sm text-[#4c4e4e]">
                Located near the Paragliding landing site, The Lost Hostels Bir
                offers river stream & mountain view with unique facilities in a
                relaxing and peaceful atmosphere.
              </p>
              <button className="font-medium font-playfair text-sm text-[#116b89] underline decoration-[1.5px]">
                Know More
              </button>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Locations;
