import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Our Story",
      link: "/#our-story",
    },
    {
      title: "Locations",
      link: "/#locations",
    },
    {
      title: "Work with Us",
      link: "/workwithus",
    },
    {
      title: "Gallery",
      link: "/#gallery",
    },
    {
      title: "Testimonials",
      link: "/#testimonials",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-[100vw] bg-transparent h-[10vh] flex justify-between items-center sm:px-28 px-5 font-medium navbar z-20 text-white">
      <p className="text-xl font-playfair relative">The Lost Hostels</p>
      <ul className="sm:flex w-[50VW] justify-between text-sm hidden font-dmsans relative">
        {navItems.map((navItem, index) => (
          <HashLink to={navItem.link} key={navItem.link}>
            <li className="uppercase tracking-wider cursor-pointer">
              {navItem?.title}
            </li>
          </HashLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
