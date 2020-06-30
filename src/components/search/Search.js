import React from "react";

import "./search.style.css";

const Search = ({ onSearch, value }) => {
  return (
    <div className="search">
      <label htmlFor="searchInput">Search</label>
      <input id="searchInput" type="text" value={value} onChange={onSearch} />
    </div>
  );
};

export default Search;
