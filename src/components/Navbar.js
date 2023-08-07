const Navbar = () => {
  const navItems = ["Home", "About us", "Locations", "Gallery", "Testimonials"];

  return (
    <div className="fixed top-0 left-0 w-[100vw] bg-transparent h-[10vh] flex justify-between items-center sm:px-28 px-5 font-medium navbar z-20 text-white">
      <p className="text-xl font-playfair relative">The Lost Hostels</p>
      <ul className="sm:flex w-[40VW] justify-between text-sm hidden font-dmsans relative">
        {navItems.map((navItem, index) => (
          <li className="uppercase tracking-wider">{navItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
