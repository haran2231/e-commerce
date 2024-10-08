const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  category: { type: String, required: true },
  productImage: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
