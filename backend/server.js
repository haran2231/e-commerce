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
const allowedOrigins = [
  'http://localhost:3000',
  'https://e-commerce-eight-jade.vercel.app'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  // Log the origin for debugging
  console.log('Request Origin:', origin);

  if (origin) {
      if (allowedOrigins.includes(origin)) {
          res.setHeader('Access-Control-Allow-Origin', origin);
      } else {
          // Optionally handle other origins if needed
          res.setHeader('Access-Control-Allow-Origin', '*'); // Caution: May allow access from any origin
      }
  } else {
      // If origin is undefined, you might want to handle it or log it
      console.log('Origin header is missing');
  }

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');

  // Handle pre-flight requests
  if (req.method === 'OPTIONS') {
      return res.status(200).end();
  }

  next();
});

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
