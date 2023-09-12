import React, { useEffect, useState } from "react";
import { sanityClient } from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Events() {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  const [allPosters, setAllPosters] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "poster"]`)
      .then((data) => setAllPosters(data))
      .catch(console.error);
  }, []);

  console.log("a[p", allPosters);

  return (
    <div className="min-h-screen text-black mt-20 text-center mx-5 sm:mx-28" id="events">
      <h3 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
        Events
      </h3>
      <p className="sm:w-2/3 mx-auto text-[#4c4e4e] mb-10">
        Lost Hostels: Where Everyone Finds Their Beat! Whether it's art, music,
        or yoga, boredom is the last thing on our menu. Join us for
        unforgettable events and depart with a treasure trove of memories that
        knows no bounds.
      </p>
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
        navigation={true}
        autoplay={{ delay: 2000 }}
        className="mySwiper container mx-auto mt-5 flex flex-wrap justify-between items-center gap-16"
      >
        {allPosters?.map((poster) => (
          <SwiperSlide className="mx-2">
            <img
              className="w-96 event-card mb-5"
              src={urlFor(poster.image).url()}
              alt=""
              style={{ height: "480px" }}
            />
            {/* <p>{poster.name}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
