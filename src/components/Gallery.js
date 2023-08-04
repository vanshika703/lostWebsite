import { InstagramEmbed } from "react-social-media-embed";

import instagram1 from "../img/instagram1.png";
import instagram2 from "../img/instagram2.png";
import instagram3 from "../img/instagram3.png";
import instagram4 from "../img/instagram4.png";
import instagram5 from "../img/instagram5.png";
import instagram6 from "../img/instagram6.png";
import instagram7 from "../img/instagram7.png";
import instagram8 from "../img/instagram8.png";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="w-[100vw] flex flex-col justify-center items-center pb-40"
    >
      <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89] mb-2">
        Gallery
      </h1>
      <div className="flex flex-col flex-wrap sm:flex-row sm:mx-28 justify-center items-center">
        <img src={instagram1} className="p-1 w-96 h-96 cursor-pointer "></img>
        <img src={instagram2} className="p-1 w-96 h-96 cursor-pointer "></img>
        <img src={instagram3} className="p-1 w-96 h-96 cursor-pointer "></img>
        <img src={instagram4} className="p-1 w-96 h-96 cursor-pointer "></img>
        <img src={instagram5} className="p-1 w-96 h-96 cursor-pointer  "></img>
        <img src={instagram6} className="p-1 w-96 h-96 cursor-pointer "></img>
        <img src={instagram7} className="p-1 w-96 h-96 cursor-pointer "></img>
        <img src={instagram8} className="p-1 w-96 h-96 cursor-pointer "></img>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CvfHWD2yoM7/?img_index=1"
          width={328}
          captioned="false"
        />
      </div> */}
    </section>
  );
};

export default Gallery;
