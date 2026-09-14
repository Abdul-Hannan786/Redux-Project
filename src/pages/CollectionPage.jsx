import { useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  return (
    <div className="px-10 py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold">Your Collections</h2>
        <button className="bg-red-600  px-4 py-1.5 rounded active:scale-95 cursor-pointer transition-all font-medium">
          Clear Collection
        </button>
      </div>
      {collection.length === 0 ? (
        <div className="flex items-center justify-center w-full h-screen">
          <h1 className="font-bold text-5xl text-center">No Saved Media</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mx-auto gap-6">
          {collection?.map((item) => (
            <CollectionCard item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
