import React, { useState } from "react";

const TextComponent = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = showFullText ? text : text?.slice(0, maxLength);
  const shouldTruncate = text?.length > maxLength;

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  console.log("text", text);

  return (
    <div>
      {truncatedText?.split("\n").map((i, key) => {
        return <p key={key} className="text-[#4c4e4e]">
          {i}<br></br>
        </p>;
      })}
      {shouldTruncate && (
        <button
          onClick={toggleText}
          className="text-[#116b89] text-sm underline"
        >
          {showFullText ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default TextComponent;
