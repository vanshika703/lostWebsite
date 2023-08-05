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
      <div className="hero-content relative mx-auto text-center w-1/2">
        <h1 className="text-5xl font-playfair">Lost with us.</h1>
        <div className="flex flex-col sm:flex-row border-2 border-white rounded-lg px-5 py-2 my-5 justify-around items-center">
          <div className="flex flex-col">
            <label for="locations" className="text-lg">Location:</label>
            <select
              name="locations"
              id="locations"
              className="bg-transparent  border-b-2 border-white p-2"
            >
              <option value="Goa">Goa</option>
              <option value="Varkala">Varkala</option>
              <option value="Bir">Bir</option>
              <option value="Welligama">Welligama</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label for="Checkin" className="text-lg">Checkin date:</label>
            <input
              type="date"
              id="Checkin"
              name="Checkin"
              className="bg-transparent border-b-2 border-white p-2"
            />
          </div>
          <div className="flex flex-col">
            <label for="Checkout" className="text-lg">Checkout date:</label>
            <input
              type="date"
              id="Checkout"
              name="Checkout"
              className="bg-transparent border-b-2 border-white p-2" 
            />
          </div>
          <button className="border-2 border-white p-2 px-5 my-4 rounded-md font-medium font-dmsans text-lg">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
