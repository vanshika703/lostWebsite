import About from "./About";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Locations from "./Locations";
import Testimonials from "./Testimonials";

const Body = () => {
  return (
    <div>
      <Hero />
      <About />
      <Locations />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Body;
