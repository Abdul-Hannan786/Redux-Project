import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { addToast, clearCollection } from "../redux/slices/CollectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();

  const collection = useSelector((state) => state.collection.items);
  return (
    <div className="px-10 py-6">
      {collection.length === 0 ? (
        <div className="flex items-center justify-center w-full h-[calc(100vh-156px)]">
          <h1 className="font-bold text-5xl">Collection is Empty</h1>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-semibold">Your Collections</h2>
            <button
              onClick={() => {
                dispatch(clearCollection());
                dispatch(addToast("Collection Cleared"));
              }}
              className="bg-red-600  px-4 py-1.5 rounded active:scale-95 cursor-pointer transition-all font-medium"
            >
              Clear Collection
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mx-auto gap-6">
            {collection?.map((item) => (
              <CollectionCard item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
