import { useState } from "react";

function Search({ callback = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    callback(value);
  };

  return (
    <div className="relative px-2.5 mb-10">
      <input
        type="search"
        id="search"
        placeholder="search"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full outline-none border-b border-gray-400 placeholder-gray-300 focus:border-none h-[3rem]"
      />
      <button
        className="bg-[#26a69a] uppercase hover:bg-[#2bbbad] hover:shadow-2xl text-white px-4 py-2 mb-2 cursor-pointer transition rounded-xs absolute right-1"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
