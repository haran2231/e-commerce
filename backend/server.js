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
app.use(cors({
  origin: ['http://localhost:3000', 'https://e-commerce-eight-jade.vercel.app'], // Add your deployed URL here
  credentials: true
}));
app.use(cookieParser()); // Add this line to handle cookies

// Serve static files from 'uploads' directory
app.use('/api/products', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Session setup
// app.use(session({
//   secret: process.env.SESSION_SECRET || 'secret',
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({
//     mongoUrl: 'mongodb+srv://haran2231:NQyeXBzJuSsH5yrA@cluster0.exawh6u.mongodb.net/e-commerce?retryWrites=true&w=majority', // Ensure this URL is correct
//   }),
//   cookie: { secure: false, maxAge: 60000 } // Session expires in 1 minute
// }));

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
