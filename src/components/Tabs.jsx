import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/slices/searchSlice";

const Tabs = () => {
  const tabs = ["images", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-5 p-10">
      {tabs.map((tab, index) => (
        <button
          className={`${activeTab === tab ? "bg-orange-400" : "bg-gray-600"} transition-all cursor-pointer active:scale-95 px-5 py-1.5 rounded uppercase `}
          key={index}
          onClick={() => dispatch(setActiveTab(tab))}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
