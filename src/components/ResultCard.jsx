import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addCollection,
  removeCollection,
} from "../redux/slices/CollectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const collectionItem = useSelector((state) => state.collection.items);

  // const addToFunction = (item) => {
  //   dispatch(addCollection(item));
  // };

  return (
    <div className="h-80 relative w-[22vw] rounded-xl overflow-hidden">
      <Link target="_blank" to={item.url} className="h-full rounded-xl">
        {item.type === "image" ? (
          <img
            className="w-full h-full object-cover object-center rounded-xl"
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
      </Link>
      <div
        id="bottom"
        className="absolute px-4 py-6 bottom-0 w-full flex justify-between items-center gap-2 line-clamp-2"
      >
        <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
        {/* <button
          onClick={() => addToFunction(item)}
          className="bg-orange-400 active:scale-90 transition-all rounded px-3 py-1 font-medium cursor-pointer"
        >
          Save
        </button> */}
        <button
          onClick={
            !collectionItem.some((citem) => citem.id === item.id)
              ? () => dispatch(addCollection(item))
              : () => dispatch(removeCollection(item.id))
          }
          className="bg-orange-400 font-semibold active:scale-90 transition-all rounded px-3 py-1 cursor-pointer"
        >
          {!collectionItem.some((citem) => citem.id === item.id)
            ? "Save"
            : "Saved"}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
