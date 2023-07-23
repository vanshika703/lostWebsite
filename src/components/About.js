import aboutimg from "../img/aboutimg.png";

const About = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex">
      <div className="sm:w-[50vw] h-[100vh] flex justify-center items-center">
        <img src={aboutimg} alt="about" className="w-4/5" />
      </div>
      <div className="sm:w-[50vw] h-[100vh] flex flex-col justify-center items-start mx-auto pr-32 px-10">
        <h1 className="text-3xl font-playfair font-medium py-4 text-[#008DBB]">A Backpacker's Paradise</h1>
        <p className="text-[#a9a9a9]">
        Welcome to The Lost Hostels, where adventure and comfort come together to create a unique travel experience. Our hostels are designed for travellers seeking to explore new destinations, make new friends, and create unforgettable memories.<br></br><br></br>

At The Lost Hostels, we pride ourselves on providing affordable and comfortable accommodations in some of India's most famous destinations. Each hostel is strategically located, allowing guests to easily access the city's top attractions, nightlife, and cultural experiences.
        </p>
        <button className="border-2 border-[#008DBB] p-1 px-3 my-4 rounded-md text-[#008DBB] font-medium">know more</button>
      </div>
    </div>
  );
};

export default About;
