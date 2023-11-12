import About from "./About";
import Events from "./Events";
import Featured from "./Featured";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Locations from "./Locations";
import Testimonials from "./Testimonials";

const Body = () => {
  return (
    <div>
      <Hero />
      <Events/>
      <Locations />
      <Gallery />
      {/* <Testimonials /> */}
      
      <Featured/>
    </div>
  );
};

export default Body;
