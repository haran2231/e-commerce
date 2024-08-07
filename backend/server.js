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
// const userRoutes = require('./routes/userRoutes');
const productList = require('./routes/productList');
const { authenticateJWT } = require('./middleware/auth');
const connectDB = require('./config/db');
const session = require('express-session');
const authRoutes = require('./routes/auth');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000', // Change this to your React app's URL
  credentials: true
}));

app.use('/api/products', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/allproducts', productList);

// app.use('/api/users', userRoutes);
// app.use('/api/cart', require('./routes/cart'));
// app.use('/api', require('./routes/order'));

app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 60000 } // Session expires in 1 minute
}));
app.use('/api/auth', authRoutes);

// Routes
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

app.use('/api/cart', cartRoutes);
app.use('/api', orderRoutes);

// app.use('/api/auth', authRoutes);


// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser()); // Add this line to handle cookies

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
