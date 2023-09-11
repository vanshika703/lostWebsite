// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
            asset->{
            _id,
            url
            }
        }
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  console.log(allPostsData);

  return (
    <div className="min-h-screen text-black mt-20 text-center sm:mx-28">
      <h3 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
        The Lost Blogs
      </h3>
      <div>
        <div className="container mx-auto mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allPostsData?.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                link={blog.slug.current}
                imageUrl={blog?.mainImage?.asset.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const BlogCard = ({ title, imageUrl, link }) => {
  return (
    <Link to={"/blog/" + link}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 hover:scale-105 duration-200 text-left">
        <img src={imageUrl} alt={title} className="h-60 object-cover" />
        <div className="px-6 py-4">
          <div className="font-medium text-xl text-left">{title}</div>
          {/* <p className="text-gray-700 text-base">{content}</p> */}
        </div>
        <div className="px-6 pb-5">
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {date}
        </span> */}
        <button className="font-medium font-playfair text-[#116b89] hover:border-b-2 border-[#116b89] duration-100 ease-intext-[#116b89]   decoration-[1.5px]">
                Read More
              </button>
        </div>
      </div>
    </Link>
  );
};
