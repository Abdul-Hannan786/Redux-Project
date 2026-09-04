import { fetchImages } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button onClick={() => fetchImages("cat")}>Get Photos</button>
    </div>
  );
};

export default App;
