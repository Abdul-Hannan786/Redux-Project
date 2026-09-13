import React from "react";
import { useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  return (
    <div>
      {collection.length === 0 ? (
        <div className="flex items-center justify-center w-full h-screen">
          <h1 className="font-bold text-5xl text-center">No Saved Media</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 py-6 w-full mx-auto gap-6">
          {collection?.map((item) => (
            <CollectionCard item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
