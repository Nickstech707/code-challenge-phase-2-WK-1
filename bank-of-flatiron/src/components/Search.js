import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
