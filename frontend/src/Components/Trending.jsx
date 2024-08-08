import React, { useEffect, useState, useContext, useCallback } from 'react';
import axios from 'axios';
import CartContext from '../CartContext';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
// import ScrollToTop from '../ScrollToTop';

const categories = ['All', 'Men', 'Women', 'Baby', 'Headphones'];
const colors = ['All', 'Red', 'Blue', 'Black', 'White', 'Pink', 'Yellow', 'Green', 'Purple', 'Gray', 'Navy', 'Orange', 'Brown'];

const Trending = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const { dispatch } = useContext(CartContext);

  // const baseUrl = 'https://e-commerce-916t.onrender.com';

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterItems = useCallback((query, category, color) => {
    // console.log(query);
    const lowerCaseQuery = query ? query.toLowerCase() : '';
    // console.log(lowerCaseQuery);
    // console.log(items);
    const results = items.filter(item => {
      const itemName = item.productName ? item.productName.toLowerCase() : '';
      console.log(itemName);
      const itemColors = item.color || [];
      const matchesQuery = itemName.includes(lowerCaseQuery);
      const matchesCategory = category === 'All' || item.category === category;
      const matchesColor = color === 'All' || itemColors.includes(color);
      return matchesQuery && matchesCategory && matchesColor;
    });
    // console.log(results);
    setFilteredItems(results);
  }, [items]);

  useEffect(() => {
    filterItems(searchQuery, selectedCategory, selectedColor);
  }, [searchQuery, selectedCategory, selectedColor, items, filterItems]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // console.log(query);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://e-commerce-916t.onrender.com/api/products`);
      setItems(response.data || []);
      console.log('Fetched products:', response.data);
    } catch (error) {
      console.error('There was an error fetching products!', error);
    }
  };

  const handleAddToCart = async (item) => {
    try {
      console.log('Adding item to cart:', item);
      await axios.post(`https://e-commerce-916t.onrender.com/api/cart/add`, { item });

      // Dispatch to context
      dispatch({ type: 'ADD_TO_CART', payload: item });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <section id='search' className="mx-5 mb-4 md:mx-32 ">
      <div className="flex items-center justify-between mb-4">
        <SearchBar onSearch={handleSearch} />
        <FilterBar
          categories={categories}
          colors={colors}
          onCategoryChange={handleCategoryChange}
          onColorChange={handleColorChange}
        />
      </div>
      <h1 className="mb-4 text-3xl font-medium">Our Collections</h1>
      <div className="grid grid-cols-2 text-center md:justify-around md:grid-cols-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="pb-3 mx-2 mb-2 border border-black">
            <img src={`http://localhost:5000/${item.productImage}`} className="h-52" alt={item.name} />
            <p className="mt-1">{item.productName}</p>
            <p>Category: {item.category}</p>
            <p>Colors: {item.color }</p>
            <p>
              ${item.price}{' '}
              <span className="ml-2 font-bold text-blue-800 line-through">
                ${item.originalPrice}
              </span>
            </p>
            <button
              className="p-3 mt-3 text-white bg-black btn"
              onClick={() => handleAddToCart(item)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
