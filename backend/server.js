const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const productList = require('./routes/productList');
const { authenticateJWT } = require('./middleware/auth');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser()); // Handle cookies

// CORS Middleware
app.use(cors({
  origin: 'https://e-commerce-eight-jade.vercel.app',
  credentials: true, // If you need to allow credentials (cookies, authorization headers, etc.)
}));




// Serve static files from 'uploads' directory
app.use('/api/products', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/allproducts', productList);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api', orderRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
