import facebook from "../img/facebook (1).png";
import instagram from "../img/instagram (1).png";

const Footer = () => {
  return (
    <>
      <div className="w-[100vw] bg-[#116b89] flex flex-col sm:flex-row  justify-between px-10 sm:px-28 py-12 text-white">
        <div className="w-[100vw] sm:w-1/2">
          <h1 className="text-3xl font-playfair font-medium">
            The Lost Hostels
          </h1>
          <p className="text-xl text-[#8cb6c4]">Come get lost with us.</p>
          <button className="border-2 border-white p-1 px-3 my-4 rounded-md font-medium font-dmsans">
            Book Now
          </button>
        </div>
        <div className="w-[100vw] sm:w-1/2 flex flex-col sm:items-end">
          <ul>
            <li className="text-sm">Contact Us</li>
            <li className="text-sm text-[#8cb6c4]">Varkala: +91 7012416343</li>
            <li className="text-sm text-[#8cb6c4]">Goa: +91 9307762867</li>
            <li className="text-sm text-[#8cb6c4]">Bir: +91 6230267754</li>
            <div className="flex w-36">
              <img src={facebook} className="w-8 m-1"></img>
              <img src={instagram} className="w-8 m-1"></img>
            </div>
          </ul>
        </div>
      </div>
      <div  className="w-[100vw] bg-[#094256] flex flex-row  justify-between px-10 sm:px-28 py-2 text-[#3e7a8e] text-xs items-center">
        <p>&#169; 2023 Lost Hostels</p>
        <p> &lt;Made by V /&gt;</p>
      </div>
    </>
  );
};

export default Footer;
