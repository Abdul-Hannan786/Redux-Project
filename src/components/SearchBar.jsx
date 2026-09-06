import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/slices/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="flex gap-5 bg-gray-900 p-10">
        <input
          type="text"
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
          placeholder="search anything..."
          className="border-2 px-4 py-2 text-xl w-full rounded outline-none"
        />
        <button className="active:scale-95 border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
