const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');
const router = express.Router();


// Get all products
router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
      // console.log(products);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  module.exports = router;