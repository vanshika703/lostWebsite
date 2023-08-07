import { InstagramEmbed } from "react-social-media-embed";

import instagram1 from "../img/instagram1.png";
import instagram2 from "../img/instagram2.png";
import instagram3 from "../img/instagram3.png";
import instagram4 from "../img/instagram4.png";
import instagram5 from "../img/instagram5.png";
import instagram6 from "../img/instagram6.png";
import instagram7 from "../img/instagram7.png";
import instagram8 from "../img/instagram8.png";

const images = [
  instagram1,
  instagram2,
  instagram3,
  instagram4,
  instagram5,
  instagram6,
  instagram7,
  instagram8,
];
const Gallery = () => {
  return (
    <section
      id="gallery"
      className="w-[100vw] flex flex-col justify-center items-center pb-40"
    >
      <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89] mb-2">
        Gallery
      </h1>
      <div className="flex flex-col flex-wrap sm:flex-row sm:mx-28 justify-center items-center ">
        {images.map((index) => {
          return (
            <div class="img-div">
              <img
                src={index}
                className="p-1 w-80 h-80 cursor-pointer"
                alt="gallery"
              ></img>
            </div>
          );
        })}
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
