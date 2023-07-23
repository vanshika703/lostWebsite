const navItems = ["HOME", "ABOUT US", "LOCATIONS", "GALLERY", "TESTIMONIALS"];

const Hero = () => {
  return (
    <section className="hero relative h-[100vh] w-[100vw] flex flex-col justify-center items-start text-white">
      <div className="fixed top-0 left-0 w-[100vw] bg-transparent h-[10vh] flex justify-between items-center sm:px-28 px-5 font-medium">
        <p className="text-xl font-playfair">The Lost Hostels</p>
        <ul className="sm:flex w-[40VW] justify-between text-sm hidden">
          {
            navItems.map((navItem, index) => <li>{navItem}</li>)
          }
        </ul>
      </div>
      <div className="hero-content relative sm:ml-28 mx-auto">
        <h1 className="text-5xl font-playfair">come get lost<br></br> with us.</h1>
        <button className="border-2 border-white p-1 px-3 my-4 rounded-md font-medium">book now</button>
      </div>
    </section>
  );
};

export default Hero;
