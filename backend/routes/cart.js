const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
// const { ObjectId } = require('mongodb');

// Get cart items
router.get('/', async (req, res) => {
  try {
    const cart = await Cart.findOne();
    res.json(cart);
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Add item to cart
router.post('/add', async (req, res) => {
  const { item } = req.body;
  try {
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ items: [] });
      console.log('New cart created:', cart);
    }
    cart.items.push(item);
    await cart.save();
    console.log('Item added to cart:', cart);
    res.json(cart);
  } catch (err) {
    console.error('Error adding item to cart:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Remove item from cart
router.post('/remove', async (req, res) => {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({ msg: 'Product ID is required' });
  }

  try {
    let cart = await Cart.findOne();

    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }

    console.log('Initial cart:', cart);

    const initialLength = cart.items.length;
    cart.items = cart.items.filter(item => {
      console.log('Checking item with productId:', item.productId);
      return item._id.toString() !== productId;
    });

    if (cart.items.length === initialLength) {
      console.log('Item not found in cart');
      return res.status(404).json({ msg: 'Item not found in cart' });
    }

    await cart.save();
    console.log('Item removed from cart:', cart);
    res.json(cart);
  } catch (err) {
    console.error('Error removing item from cart:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
