import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../img/logo.png";

const Navbar = () => {
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);
  const navItems = [
    {
      title: "Home",
      link: "/#home",
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
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Merch",
      link: "/merch",
    },
  ];

  return (
    <>
      {isPhoneNavOpen && (
        <div class="block md:flex md:items-center md:justify-between w-full flex-1 bg-none fixed top-16 z-50 bg-[#116b89]">
          <div class="flex sm:hidden bg-transparent flex-col md:flex-row md:items-center mx-5">
            {navItems.map(({ title, link }) => {
              return (
                <HashLink
                  to={link}
                  key={title}
                  onClick={() => {
                    setIsPhoneNavOpen(false);
                  }}
                >
                  <p class="text-white md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent underline">
                    {title}
                  </p>
                </HashLink>
              );
            })}
          </div>
        </div>
      )}

      <div className="fixed top-0 left-0 w-[100vw] bg-transparent h-[10vh] flex justify-between items-center sm:px-28 px-5 font-medium navbar z-50 text-white">
        <HashLink to="/#home">
          <p className="text-xl font-playfair relative flex items-center">
            <img src={logo} className="mr-2 w-12" alt="lost hostel logo"></img>
            The Lost Hostels
          </p>
        </HashLink>
        <div
          className="z-10 block sm:hidden"
          onClick={() => {
            setIsPhoneNavOpen(!isPhoneNavOpen);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 z-10"
          >
            <g clip-path="url(#clip0_429_11066)">
              <path
                d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                stroke="#fff"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_429_11066">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.000915527)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <ul className="sm:flex w-[50VW] justify-between text-sm hidden font-dmsans relative mt-3">
          {navItems.map((navItem, index) => (
            <HashLink to={navItem.link} key={navItem.link}>
              <li className="uppercase tracking-wider cursor-pointer">
                <p className="border-b-[3px] border-transparent hover:border-white duration-200 ease-in">
                  {navItem?.title}
                </p>
              </li>
            </HashLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
