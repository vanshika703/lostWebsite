import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import HostelDetails from "./components/HostelDetails/HostelDetails";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="font-dmsans">
      {/*  
      <Hero />
      <About/>
      <Locations/>
      <Gallery/>
      <Testimonials/> */}
      <Navbar />
      <HostelDetails />

      <Footer />
    </div>
  );
}

export default App;
