const Footer = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="w-[100vw] bg-[#116b89] flex flex-col sm:flex-row  justify-between px-10 sm:px-28 py-12 text-white"
      >
        <div className="">
          <h1 className="text-3xl font-playfair font-medium">
            The Lost Hostels
          </h1>
          <p className="text-xl text-[#8cb6c4]">Come get lost with us.</p>
          <button className="border-2 border-[#8cb6c4] p-1 px-3 my-4 rounded-md font-medium font-dmsans">
            Book Now
          </button>
        </div>
        <div className="flex flex-col sm:items-end">
          <ul>
            <li className="text-sm">Contact Us</li>
            <li className="text-sm text-[#8cb6c4]">Varkala: +91 7012416343</li>
            <li className="text-sm text-[#8cb6c4]">Goa: +91 9307762867</li>
            <li className="text-sm text-[#8cb6c4]">Bir: +91 6230267754</li>
            <div class="flex items-center mt-2">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/thelosthostels/?hl=en"
                target="_blank"
                class="flex justify-center items-center h-8 w-8 group relative border-2 border-[#8cb6c4] rounded-full mr-3"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="absolute group-hover:text-logoGreen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/losthostelgoa/"
                target="_blank"
                class="flex justify-center items-center h-8 w-8 group relative border-2 border-[#8cb6c4] rounded-full mr-3"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  class="absolute group-hover:text-logoGreen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className="bg-[#094256] flex flex-row  justify-between px-10 sm:px-28 py-2 text-[#3e7a8e] text-xs items-center">
        <p>&#169; 2023 Lost Hostels</p>
        <p> &lt;Made by V /&gt;</p>
      </div>
    </>
  );
};

export default Footer;
