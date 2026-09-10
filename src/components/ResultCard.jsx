const ResultCard = ({ item }) => {
  return (
    <div className="h-80 relative bg-white w-[22vw] rounded">
      <a href={item.url} className="h-full">
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
      </a>
      <div
        id="bottom"
        className="absolute p-6 bottom-0 w-full flex justify-between items-center gap-2"
      >
        <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
        <button className="bg-gray-600 rounded px-3 py-1 font-medium cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
