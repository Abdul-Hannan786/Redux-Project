import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="h-80 relative bg-white w-[22vw] rounded">
      <div className="h-full">
        {item.type === "image" ? (
          <img
            className="w-full h-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            src={item.src}
            // controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          ></video>
        ) : (
          ""
        )}
      </div>
      <div id="bottom" className="absolute p-4 bottom-0 h-[35%] w-full">
        <h2 className="text-xl">{item.title}</h2>
      </div>
    </div>
  );
};

export default ResultCard;
