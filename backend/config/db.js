const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://haran2231:NQyeXBzJuSsH5yrA@cluster0.exawh6u.mongodb.net/e-commerce?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
