import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Login from "./AdminUpdate/Login";
import ProductAdd from "./AdminUpdate/ProductAdd";
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import { CartProvider } from './CartContext';
import Cart from './Pages/Cart';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            {/* <Route path="/adminlogin" element={<Login />} /> */}
            <Route path="/product-add" element={<ProductAdd />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
