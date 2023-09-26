import React from "react";
import "tailwindcss/tailwind.css";
import tshirtimg from "../../img/tshirt.jpeg";
import lostsoulimg from "../../img/lostsoul.jpg";
import lostloveimg from "../../img/lostlove.jpg";
import courseimg from "../../img/course.png";

const Blog = () => {
  return (
    <div className="p-6 container mx-auto">
      {/* <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89] text-center mt-16">
        The Lost Merch
      </h1> */}
      <div className="flex flex-col gap-5 sm:mx-28 text-[#4c4e4e] mt-20">
        <div className="flex flex-col sm:flex-row gap-5 h-3/4 flex-1">
          <div className="h-auto  sm:w-1/3 rounded-md shadow-box flex-1 p-5 items-stretch">
            <h3 className="text-2xl font-playfair font-semibold py-4 text-[#116b89] text-center">
              Unlock the Lost Vibe with our signature tee!
            </h3>
            <img src={tshirtimg} alt="tshirt" className="mx-auto"/>
            <p>Grab yours at any hostel reception and join the family today</p>
          </div>
          <div className="flex flex-col sm:w-2/3 h-full gap-4">
            <div className="flex flex-col sm:flex-row rounded-md shadow-box sm:min-h-64 p-5">
              <img src={lostsoulimg} alt="tshirt" className="w-36 mx-auto" />
              <div className="flex flex-col justify-between items-start p-5">
                <p>
                  Join Jitesh on an epic adventure through love, betrayal,
                  spiritual quests, and a wild backpacker life in India. When a
                  pandemic confines him to a Goa hostel, he's pushed to discover
                  the true meaning of life.
                </p>
                <p className="text-xl font-playfair font-semibold text-[#116b89]">
                  Will he find enlightenment or remain lost in the chaos?
                </p>
                <a
                  href="https://www.amazon.in/Lost-Soul-backpackers-journey-discovery-ebook/dp/B08C71M1Q5/ref=sr_1_3?crid=27ASXNRM6NWWW&keywords=lost+soul&qid=1694368172&sprefix=lost+soul%2Caps%2C233&sr=8-3"
                  target="_blank"
                  className="sm:min-w-1/4" rel="noreferrer"
                >
                  <button className="w-full bg-[#116b89] hover:bg-[#0e5b74] p-3 px-8 rounded-md font-medium font-dmsans text-sm text-[#fff]">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row rounded-md shadow-box sm:min-h-64 p-5">
              <div className="flex flex-col justify-between items-start p-5">
                <p>
                  Love ignites on an Indian surf beach, but as J backpacks
                  through Europe, his heart's compass spins. Join the adventure
                  in 'Lost Love' as he hunts for love's true north, destined for
                  an epic quest or a wild goose chase?
                </p>
                <p className="text-xl font-playfair font-semibold py-2 text-[#116b89]">
                  Dive into this captivating story and join the search for a
                  heart's true destination.
                </p>
                <a
                  href="https://www.amazon.in/Lost-Love-backpackers-Journey-Oneness/dp/B0BYKCF228/ref=sr_1_8?crid=1DOO5XLWFLTX8&keywords=lost+love&qid=1694368312&sprefix=lost+love%2Caps%2C250&sr=8-8"
                  target="_blank"
                  className="sm:min-w-1/4"
                >
                  <button className="w-full bg-[#116b89] hover:bg-[#0e5b74] p-3 px-8 rounded-md font-medium font-dmsans text-sm text-[#fff]">
                    Buy Now
                  </button>
                </a>
              </div>
              <img src={lostloveimg} alt="tshirt" className="w-36 mx-auto" />
            </div>
          </div>
        </div>
        <div className="w-full rounded-md shadow-box p-5 flex flex-col sm:flex-row">
          <img
            src={courseimg}
            alt="course"
            className="sm:h-72 sm:w-3/5 object-cover rounded mx-auto"
          />
          <div className="sm:w-2/5 flex flex-col justify-around items-start p-5">
            <p className="text-xl font-playfair font-semibold py-2 text-[#116b89]">
              Turn your dream of owning a backpacker's haven into reality! Learn
              everything from market research to guest satisfaction in our
              comprehensive course. Take the first step – enroll now and make it
              happen!
            </p>
            <a
              href="https://jiteshagrawal.graphy.com/courses/Idea-to-Reality---Opening-your-own-Backpacking-Hostel-63c7b927e4b00645150ea5ca"
              target="_blank"
              className="sm:min-w-1/2"
            >
              <button className="w-full bg-[#116b89] hover:bg-[#0e5b74] p-3 px-8 rounded-md font-medium font-dmsans text-sm text-[#fff]">
                Get started today!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
