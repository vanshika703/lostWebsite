/* import React from "react";
import "tailwindcss/tailwind.css";
import blogimg from "../../img/merch.svg";

const Merch = () => {
  const blogs = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiKK0MLBSufP9ZTCHsZY-a_k-i_LZydymClGiUZj4&s", // Replace with your image URL
      title: "Blog Post 1",
      text: "This is a brief introduction to Blog Post 1. Lorem ipsum dolor sit amet...",
      link: "/blog-post-1", // Replace with the actual link
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiKK0MLBSufP9ZTCHsZY-a_k-i_LZydymClGiUZj4&s", // Replace with your image URL
      title: "Blog Post 2",
      text: "Discover more about Blog Post 2. Lorem ipsum dolor sit amet...",
      link: "/blog-post-2", // Replace with the actual link
    },
    {
        id: 3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiKK0MLBSufP9ZTCHsZY-a_k-i_LZydymClGiUZj4&s", // Replace with your image URL
        title: "Blog Post 2",
        text: "Discover more about Blog Post 2. Lorem ipsum dolor sit amet...",
        link: "/blog-post-2", // Replace with the actual link
      },
    // Add more blog entries as needed
  ];

  return (
    <div className="p-6 px-28">
      <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89] text-center mt-16">
        The Lost Merch
      </h1>
      <hr className="w-2/3 mx-auto py-4"></hr>
      <div className="flex flex-wrap">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white w-1/4 p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg mx-auto"
          >
            <div className="flex flex-col">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-96 h-72 object-cover rounded-md"
              />
              <div className="ml-4 flex flex-col justify-between">
                <div><h2 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
                  {blog.title}
                </h2>
                <p className="text-gray-600">{blog.text}</p></div>
                <a
                  href={blog.link}
                  className="text-primary hover:underline mt-2 block"
                >
                  <button className="border-2 border-[#116b89] p-2 px-5 my-4 rounded-md font-medium font-dmsans text-lg text-[#116b89]">
                    View More
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merch;
 */