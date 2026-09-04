import { fetchImages, fetchVideos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button onClick={() => fetchImages("cat")}>Get Photos</button>
      <button onClick={() => fetchVideos("cat")}>Get Videos</button>
    </div>
  );
};

export default App;
