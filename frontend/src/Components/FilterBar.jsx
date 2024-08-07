import React from 'react';

const FilterBar = ({ categories, colors, onCategoryChange, onColorChange }) => {
  return (
    <div className="flex items-center">
      <select onChange={onCategoryChange} className="p-2 mr-2 border border-gray-300">
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <select onChange={onColorChange} className="p-2 border border-gray-300">
        {colors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
