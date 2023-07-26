import img1 from "../img/1.jpeg";
import img2 from "../img/2.JPG";
import img3 from "../img/3.jpg";
import img4 from "../img/4.JPG";
import img5 from "../img/5.JPG";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpeg";

const Gallery = () => {
  return (
    <section id="gallery" className="w-[100vw] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
        Gallery
      </h1>
      <div className="flex flex-col sm:flex-row sm:mx-28">
        <div className="w-full sm:w-1/2 flex">
          <div className="w-1/2">
            <img src={img1} className="p-1"></img>
            <img src={img6} className="p-1"></img>
          </div>
          <div className="w-1/2">
            <img src={img3} className="p-1"></img>
            <img src={img4} className="p-1"></img>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <div>
            <img src={img5} className="p-1"></img>
            <img src={img2} className="p-1"></img>
          </div>
          <div>
            <img src={img7} className="p-1"></img>
            <img src={img8} className="p-1"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
