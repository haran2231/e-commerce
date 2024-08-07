const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');
const router = express.Router();

// Configure storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Filename format
  }
});

const upload = multer({ storage: storage });

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add a new product
router.post('/', upload.single('productImage'), async (req, res) => {
  const { productName, price, color, category } = req.body;
  const productImage = req.file ? req.file.path : '';

  try {
    const newProduct = new Product({
      productName,
      price,
      color,
      category,
      productImage
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update a product by ID
router.put('/:id', upload.single('productImage'), async (req, res) => {
  const { productName, price, color, category } = req.body;
  const productImage = req.file ? req.file.path : '';

  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.productName = productName;
    product.price = price;
    product.color = color;
    product.category = category;
    if (productImage) product.productImage = productImage;

    await product.save();
    res.json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
