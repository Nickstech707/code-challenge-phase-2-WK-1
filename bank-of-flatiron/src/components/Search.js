import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = (event) => {
    const searchText = event.target.value;
    setQuery(searchText);

    if (searchText === "") {
      window.location.reload();
    } else {
      onSearch(searchText);
    }
  };

  return (
    <div className="search-bar">
      <input
        id="search"
        type="text"
        placeholder="Search your Recent Transactions"
        value={query}
        onChange={handleSearch}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default SearchBox;
