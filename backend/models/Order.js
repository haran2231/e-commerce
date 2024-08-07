const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{ type: Object, required: true }],
  shippingDetails: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
