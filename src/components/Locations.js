import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img from "../img/TheLostHostel.png";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQrcXL2BXLrfDLRZyCtwrl3wJRoQCTw3F4BMHdZF-Iw&s"
      onDragStart={handleDragStart}
      role="presentation"
      className="w-96 rounded-md"
      alt="hostel"
    />
    <p className="absolute left-1 bottom-1 text-white text-xl font-semibold">Lost Hostel Goa</p>
  </div>
];

const Gallery = () => {
  return (
    <div className="mx-20">
      <h1 className="mt-20">Locations</h1>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default Gallery;
