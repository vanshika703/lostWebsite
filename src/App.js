import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="font-dmsans">
      <Navbar />
      <Hero />
      <About />
      <Locations />
      <Gallery />
      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
