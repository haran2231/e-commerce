// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
