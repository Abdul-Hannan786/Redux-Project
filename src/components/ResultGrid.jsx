import { useDispatch, useSelector } from "react-redux";
import { fetchImages, fetchVideos } from "../api/mediaApi";
import { useEffect } from "react";
import { setError, setLoading, setResult } from "../redux/slices/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, result, loading, error } = useSelector(
    (state) => state.search,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab === "images") {
          const { results } = await fetchImages(query);
          data = results.map((item) => ({
            id: item.id,
            type: "image",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab === "videos") {
          const { videos } = await fetchVideos(query);
          data = videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name,
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }

        // console.log(data)
        dispatch(setResult(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    getData();
  }, [query, activeTab, dispatch]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex w-full flex-wrap justify-between px-10 gap-6">
      {result?.map((item, index) => (
        <div key={index}>
          <ResultCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ResultGrid;
