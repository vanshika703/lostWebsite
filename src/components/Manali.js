import React from "react";
import whymanali from "../img/whymanali.png";
import manali1 from "../img/manali1.jpg";
import manali2 from "../img/manali2.jpg";
import manali3 from "../img/manali3.jpg";
import mountainbg from "../img/mountainbg.jpg";
import CountUp from "react-countup";

const Manali = () => {
  return (
    <div className="m-0 p-0">
      <div className="manaliHero w-[95vw] h-[80vh] mt-[14vh] mx-auto relative rounded-md text-center">
        <div className="absolute top-10 left-12 text-left sm:w-1/3">
          <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
            Embrace the Alpine Splendor <br></br>at The Lost Hostels Manali
          </h1>

          <p className="text-l font-medium text-[#10384D]">
            Where the mountains whisper ancient tales and every path leads to
            wonder
          </p>
          <a
            href="https://live.ipms247.com/booking/book-rooms-tlhmanali"
            target="_blank"
          >
            <button className="md:block bg-[#116b89] hover:bg-[#0e5b74] p-3 px-8 my-4 rounded-md font-medium font-dmsans text-sm text-[#fff] shadow-sm">
              Book Your Mountain Escape
            </button>
          </a>
        </div>
      </div>

      <div
        className="w-[100vw] flex flex-col sm:flex-row sm:-mt-20"
        id="our-story"
      >
        <div className=" w-[100vw] sm:w-[50vw] md:min-h-[100vh] flex justify-center items-center">
          <img src={whymanali} alt="manali" height={500} width={500} />
        </div>
        <div className=" w-[100vw] sm:w-[50vw] md:min-h-screen flex flex-col justify-center items-start mx-auto sm:pr-32 px-10">
          <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
            Why Travel to Manali?
          </h1>
          <p className="text-[#4c4e4e]">
            Manali, with its majestic snowcaps, lush forests, and meandering
            rivers, is a magnet for adventure seekers and nature lovers alike.{" "}
            <br></br> <br></br>
            The region offers a thrilling range of activities, from skiing and
            paragliding in the snow-covered <strong>
              Rohtang Pass
            </strong> and <strong>Solang Valley</strong> to serene hikes to{" "}
            <strong>Jogini Waterfall</strong> and visits to the historic{" "}
            <strong>Hadimba Devi Temple</strong>. <br></br> <br></br>For those
            craving adventure, Manali provides an adrenaline rush with options
            like mountain sports and river rafting. At the same time, the
            region's cultural charm, tranquil hot springs, and the allure of the
            Great Himalayan National Park appeal to those seeking serenity.
            Manali is the perfect destination for a diverse range of
            experiences, captivating adventurers and offering a serene escape
            amidst the hills.
          </p>
        </div>
      </div>
      <section className="flex flex-col justify-center gap-8 items-center px-5 sm:px-28 w-full relative mb-12">
        <h2 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
          Why The Lost Hostels Manali?
        </h2>
        <p>
          The Lost Hostels Manali stands as your sanctuary amidst the clouds,
          harmoniously nestled in the heart of the Himalayas. Our doors welcome
          you to an extraordinary experience that transcends the realms of the
          ordinary. Here, the very essence of the mountains weaves its threads
          through every story told and every interaction shared, creating an
          atmosphere that is truly unique.<br></br>
          <br></br>
          In <strong>November 2023</strong>, Manali became the latest chapter in
          The Lost Hostels' enchanting journey. We have artfully crafted a
          tapestry where comfort and adventure intertwine, providing a haven for
          those who yearn for the magic of stargazing and the enchantment of
          witnessing the sunrise. The spirit of Manali soars high, and we invite
          you to be a part of this incredible journey, where the mountains
          themselves whisper tales of wonder and adventure, making The Lost
          Hostels Manali a place of unforgettable experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center w-full">
          <div className="w-full lg:w-1/3 text-center flex justify-center gap-2 items-center border border-[#b7d2db] p-2 rounded">
            <svg
              stroke="#116b89"
              fill="#116b89"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m90.67 25 96.83 144.3-1.5-24.6L105.7 25zM131 25l156.2 123.1-5-41.8 121.5 129.5L435 487h51.7V25zm70.5 98.2 3.6 61.8c-5 7.4-24.1 32.5-56.9 36.8-4.1.5-7.2 4-7.2 8.2 0 0-.8 37.2 45.7 83.1l34.7-55.7c-7-7.3-14-16.5-21.5-28.7l27.6-30.1c1.8-1.9 2.5-4.4 2.1-7L218 121.4c-2.7-11.2-16.9-7.5-16.5 1.8zm-69.8 27c-9.2 0-16.9 3.8-20.8 10.3-7.1 11.8-.1 29.1 15.8 38.6s34.5 7.4 41.5-4.5-.1-29.1-15.9-38.5c-6.5-3.8-13.7-5.9-20.6-5.9zm155.5 76.2-42.6 32.7-12.1 80.1c12.4 3.1 25.4 4 38.3 2.2l22.5-3.1 45.9 50.4c1.9 2 4.6 3 7.3 2.6l29-4c11.2-3.3 7.2-16.5-1.4-16.6l-21.4.7-30.6-66.1c-1.1-2.2-3-3.8-5.3-4.5l-38.7-11.2 22.6-19.4L353 289c4.7 1.5 9.3-1.1 10.8-5.3l10.5-34c1.7-11.3-11.7-13.6-15.5-6l-8.1 17.1-53.9-34.8c-3.2-1.8-6.8-1.5-9.6.4zM223.9 285l-24.3 38.9c5.3 3.8 11 7.1 16.9 9.7zm19 74.3L274.4 487h12.8l-31.4-127.4c-4.3.1-8.6 0-12.9-.3z"></path>
            </svg>
            <p className="mt-2 font-medium">Mountain Adventures</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 text-center flex justify-center gap-2 items-center border border-[#b7d2db] p-2 rounded">
            <svg
              stroke="#116b89"
              fill="#116b89"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M237.22,151.9l0-.1a1.42,1.42,0,0,0-.07-.22,48.46,48.46,0,0,0-2.31-5.3L193.27,51.8a8,8,0,0,0-1.67-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,8,8,0,0,0-1.67,2.44L21.2,146.28a48.46,48.46,0,0,0-2.31,5.3,1.72,1.72,0,0,0-.07.21s0,.08,0,.11a48,48,0,0,0,90.32,32.51,47.49,47.49,0,0,0,2.9-16.59V96h32v71.83a47.49,47.49,0,0,0,2.9,16.59,48,48,0,0,0,90.32-32.51Zm-143.15,27a32,32,0,0,1-60.2-21.71l1.81-4.13A32,32,0,0,1,96,167.88V168h0A32,32,0,0,1,94.07,178.94ZM203,198.07A32,32,0,0,1,160,168h0v-.11a32,32,0,0,1,60.32-14.78l1.81,4.13A32,32,0,0,1,203,198.07Z"></path>
            </svg>
            <p className="mt-2 font-medium">Rooms with Views</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 text-center flex justify-center gap-2 items-center border border-[#b7d2db] p-2 rounded">
            <svg
              stroke="#116b89"
              fill="#116b89"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M270.9 350.6c-.7-8.2-7.6-14.6-15.9-14.6-7.6 0-14 5.4-15.6 12.5L223.8 427c-.5 2.3-.8 4.6-.8 7 0 17.7 14.3 30 32 30s32-12.3 32-30c0-2.9-.4-5.7-1.1-8.4l-15-75zM305.9 355zM388.9 386.3c-1.7-1.4-3.3-2.9-5.1-3.9l-59.6-43.5c-5.8-3.8-12-3.7-16.5.9-4.1 4.1-4.7 10.4-1.7 15.4l45 61.8c.9 1.5 2.2 2.8 3.4 4.2 7.8 9.1 25.1 9.6 34.6 0 9.4-9.8 9.3-27.2-.1-34.9zM372.5 335zM435.4 320h-59.5c-3.9 0-7.4 2.2-8.1 6.2-.6 3.6 1.3 7.1 4.7 8.8h.1l57.7 17.8c8.3 1.9 17.7-5.5 17.7-14.8 0-11.8-4.8-18-12.6-18zM139.2 335zM139.2 335c3.3-1.6 5.3-5.2 4.7-8.8-.7-4-3.9-6.2-8.1-6.2H76.3c-7.6 0-12.3 8.3-12.3 17.6s9.1 17.1 17.4 15.2l57.7-17.8h.1zM187.9 338.8l-59.6 43.4c-1.8 1.1-3.6 2.4-5.1 3.9-9.6 9.6-9.6 25.1 0 34.6 9.6 9.6 25.1 9.6 34.6 0 1.3-1.3 2.4-2.7 3.4-4.2l45-61.6c3-5 2.5-11.2-1.7-15.3-4.6-4.5-11.8-4.8-16.6-.8zM358.7 138.7c0-57.6-72.4-90.7-96-90.7 12 80.8-101.7 113-112 181.3-10.3 68.3 48 90.7 48 90.7 16.3-56.6 72.4-75.6 109.7-99.8 40.7-26.4 50.3-51.3 50.3-81.5zM358.7 259.6c5-14.7 1.9-49.3-3-63.4-9 17.5-26.3 32.4-47.2 46-8.6 5.6-20.9 10.8-29.8 15.9-18.7 10.5-34 20.6-46.3 34.4 11.3 16.4 31.3 27.7 46.3 27.7 36-.2 64-13.7 80-60.6z"></path>
              <path d="M161.8 171.9c11.7-15.1 24.9-23.8 38.2-36.2 13.4-12.5 22.1-21.2 27.5-31.3-10.7-20.1-30.8-28.1-44.7-26.1 2.3 28.6-30 44-32 64.8-1.3 12.6 5.4 25 11 28.8z"></path>
            </svg>
            <p className="mt-2 font-medium">Soulful Stories</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  justify-between items-center w-full gap-10">
          <img src={manali1} alt="" className="sm:w-1/3 h-52" />
          <img src={manali2} alt="" className="sm:w-1/3 h-52" />

          <img src={manali3} alt="" className="sm:w-1/3 h-52" />
        </div>
        <img
          src={mountainbg}
          alt=""
          className="absolute top-0 sm:-top-52 left-0  -z-10 opacity-10"
        />
        <h1 className="text-2xl font-medium">
          Claim your spot in the clouds{" "}
          <a
            className="text-[#116b89] font-semibold underline cursor-pointer"
            href="https://live.ipms247.com/booking/book-rooms-tlhmanali"
            target="_blank"
          >
            now
          </a>
          !
        </h1>
      </section>

      {/*  <section className="flex flex-wrap justify-center items-center p-8 space-y-4 lg:space-y-0 px-5 sm:px-28">
        <div className="w-full lg:w-1/2 mx-auto">
          <div className="bg-gray-300 rounded-lg overflow-hidden hover:shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53987.970254809254!2d77.13304486953126!3d32.25140520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904871c5d823355%3A0x332bba81f2559290!2sThe%20Lost%20Hostels%2C%20Manali!5e0!3m2!1sen!2sin!4v1699551231720!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-left flex flex-col justify-center items-start pl-10">
          <p className="text-2xl font-playfair font-semibold text-[#116b89]">
            Location:
          </p>
          <p>
            The Lost Hostels, Log Huts Area Rd, behind Apple Country Resort, Old
            Manali, Manali, Himachal Pradesh 175131
          </p>
          <p className="text-2xl font-playfair font-semibold text-[#116b89] mt-5">
            Contact Details:
          </p>
          <p>+91 7012416343</p>
          <p>events@thelosthostels.com</p>
        </div>
      </section> */}
    </div>
  );
};

export default Manali;
