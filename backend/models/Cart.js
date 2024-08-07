const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  items: [
    {
      productId: String,
      productName: String,
      price: Number,
      quantity: Number,
      productImage: String,
      category: String,
      color: [String],
    },
  ],
});

module.exports = mongoose.model('Cart', CartSchema);
