import { useSelector } from "react-redux";
import { fetchImages, fetchVideos } from "../api/mediaApi";
import { useEffect } from "react";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    const getData = async () => {
      let data;
      if (activeTab === "images") {
        const { results } = await fetchImages(query);
        data = results.map((item) => ({
          id: item.id,
          type: "image",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
        }));
      }
      if (activeTab === "videos") {
        const { videos } = await fetchVideos(query);
        data = videos.map((item) => ({
          id: item.id,
          type: "video",
          title: item.user.name,
          thumbnail: item.image,
          src: item.url,
        }));
      }

      console.log(data);
    };
    getData();
  }, [query, activeTab]);

  return <div>{/* <button>get Data</button> */}</div>;
};

export default ResultGrid;
