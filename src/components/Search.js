import React from 'react';

const Search = ({ handleSearch, search }) => (
  <p>
    search here: <input value={search} onChange={handleSearch} />
  </p>
);

export default Search;
