import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Search = ({ data, filteredData, setFilteredData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Хайлт"
        className="flex flex-row items-center bg-gray rounded-2xl h-10 w-60 p-3"
      />
      <BiSearchAlt
        className="h-6 w-6 absolute right-2 top-2"
        onClick={() => {
          navigate("/search");
        }}
      />
    </div>
  );
};

export default Search;
