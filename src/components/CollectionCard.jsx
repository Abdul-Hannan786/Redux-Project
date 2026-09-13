import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToast, removeCollection } from "../redux/slices/CollectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="h-80 relative w-full rounded-xl overflow-hidden">
      <Link target="_blank" to={item.url} className="h-full rounded-xl">
        {item.type === "image" && (
          <img
            className="w-full h-full object-cover object-center rounded-xl"
            src={item.src}
          />
        )}
        {item.type === "video" && (
          <video
            src={item.src}
            // controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          ></video>
        )}
      </Link>
      <div
        id="bottom"
        className="absolute px-4 py-6 bottom-0 w-full flex justify-between items-center gap-2"
      >
        <h2 className="text-lg font-semibold capitalize line-clamp-2">
          {item.title}
        </h2>

        <button
          onClick={() => {
            dispatch(removeCollection(item.id));
            dispatch(addToast("Media unsaved successfully"));
          }}
          className="bg-red-600 font-semibold active:scale-90 transition-all rounded px-3 py-1 cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
