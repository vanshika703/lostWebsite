const navItems = ["Home", "About us", "Locations", "Gallery", "Testimonials"];

const Hero = () => {
  return (
    <section className="hero relative h-[100vh] w-[100vw] flex flex-col justify-center items-start text-white">
      <div className="fixed top-0 left-0 w-[100vw] bg-transparent h-[10vh] flex justify-between items-center sm:px-28 px-5 font-medium navbar z-20">
        <p className="text-xl font-playfair relative">The Lost Hostels</p>
        <ul className="sm:flex w-[40VW] justify-between text-sm hidden font-dmsans relative">
          {navItems.map((navItem, index) => (
            <li className="uppercase tracking-wider">{navItem}</li>
          ))}
        </ul>
      </div>
      <div className="hero-content relative mx-auto text-center">
        <h1 className="text-5xl font-playfair mt-60">LOST WITH US.</h1>
        <a href="#destinations">
          <button className="border-2 border-white p-1 px-3 my-4 rounded-md font-medium font-dmsans">
            Book Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
