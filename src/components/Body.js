import About from "./About";
import Featured from "./Featured";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Locations from "./Locations";
import Testimonials from "./Testimonials";

const Body = () => {
  return (
    <div>
      <Hero />

      <Locations />
      <Gallery />
      {/* <Testimonials /> */}
      <About />
      <Featured/>
    </div>
  );
};

export default Body;
