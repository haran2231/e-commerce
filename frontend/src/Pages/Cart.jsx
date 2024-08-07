import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../CartContext';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Cart = () => {
  const { cart, dispatch, loading } = useContext(CartContext);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    email: '',  // Added email field
  });
  const [items, setItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const baseUrl = 'https://e-commerce-916t.onrender.com';

  // Calculate total cost
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleRemoveFromCart = async (item) => {
    try {
      await axios.post(`${baseUrl}/api/cart/remove`, { productId: item._id.toString() });
      dispatch({ type: 'REMOVE_FROM_CART', payload: { productId: item._id.toString() } });
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${baseUrl}/api/orders`, {
      items: cart,
      shippingDetails,
    });
    dispatch({ type: 'CLEAR_CART' }); // Clear cart in frontend state
    localStorage.removeItem('cart'); // Clear cart from local storage
    setOrderPlaced(true);
  } catch (error) {
    console.error('Error submitting order:', error);
  }
};

  
  useEffect(() => {
    setItems(cart);
  }, [cart]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header></Header>
      <section className="mx-5 mb-4 md:mx-32">
        <h1 className="mb-4 text-3xl font-medium">Cart</h1>
        <div className="grid grid-cols-1 text-center md:justify-around md:grid-cols-4">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item._id} className="pb-3 mx-1 mb-2 border border-black">
                <img src={`https://e-commerce-916t.onrender.com/${item.productImage}`}  className="h-52" alt={item.productName} />
                <p className="mt-1">{item.productName}</p>
                <p>Category: {item.category}</p>
                <p>Colors: {item.color}</p>
                <p>
                  ${item.price}{' '}
                  <span className="ml-2 font-bold text-blue-800 line-through">
                    ${item.originalPrice}
                  </span>
                </p>
                <button
                  className="p-3 mt-3 text-white bg-red-600 btn"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove from cart
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <>
            <div className="mt-4">
              <h2 className="text-2xl font-medium">Shipping Details</h2>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={shippingDetails.name}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={shippingDetails.address}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">City:</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Postal Code:</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={shippingDetails.postalCode}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={shippingDetails.email}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 text-white bg-blue-600 btn"
                >
                  Submit Shipping Details
                </button>
              </form>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-medium">Order Summary</h2>
              <p className="mt-2 text-xl">Total: ${calculateTotal()}</p>
            </div>
          </>
        )}

        {orderPlaced && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-8 bg-white rounded shadow-lg">
              <h2 className="mb-4 text-2xl font-medium">Order Placed!</h2>
              <p className="mb-4">Thank you for your order. A confirmation email has been sent to you.</p>
              <button
                className="px-4 py-2 text-white bg-blue-600 btn"
                onClick={() => setOrderPlaced(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer></Footer>
    </>
  );
};

export default Cart;
