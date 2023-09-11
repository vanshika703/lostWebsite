// src/component/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

export default function OnePost() {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           publishedAt,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  console.log(postData);

  return (
    <div>
      <img
        className="w-full object-cover mt-[10vh]"
        src={urlFor(postData.mainImage).url()}
        alt=""
        style={{ height: "480px" }}
      />

      <div className="min-h-screen">
        <div className="mx-auto rounded-lg">
          <div className="relative"></div>
          <div className="w-7/12 mx-auto py-12 lg:py-10 prose lg:prose-xl max-w-3/4">
            <div className="rounded mb-10">
              <h2 className="text-5xl leading-[56px] font-playfair font-semibold py-2 text-[#116b89]">
                {postData.title}
              </h2>
              <div className="flex justify-start items-center text-gray-300 mt-4">
                {postData.authorImage && (
                  <img
                    src={urlFor(postData.authorImage).url()}
                    className="w-12 h-12 rounded-full"
                    alt="Author is Kap"
                  />
                )}
                <div className="flex flex-col justify-start items-start pl-2 text-lg">
                  <h4 className="text-gray-600">{postData.name}</h4>
                  <p className="text-sm text-gray-400">
                    {postData.publishedAt.substring(0, 10)}
                  </p>
                </div>
              </div>
            </div>
            <div className="blogContent">
              <BlockContent
                blocks={postData.body}
                projectId={sanityClient?.clientConfig?.projectId}
                dataset={sanityClient?.clientConfig?.dataset}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
