
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Locations from './components/Locations';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Locations/>
      <Testimonials/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
