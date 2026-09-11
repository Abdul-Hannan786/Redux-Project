import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { query } = useSelector((state) => state.search);
  return (
    <div>
      <div className="text-center px-10 py-6 bg-blue-900">
        <h2 className="text-2xl font-semibold">Media Search</h2>
      </div>

      <SearchBar />
      {query && (
        <div>
          <Tabs />

          <ResultGrid />
        </div>
      )}
    </div>
  );
};

export default HomePage;
