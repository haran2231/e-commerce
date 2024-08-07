const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Order = require('../models/order'); // Ensure this import is correct

// Define your email credentials and transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'haran2231@gmail.com',
    pass: 'hxty zewp gjuv bhkk',
  },
});

router.post('/orders', async (req, res) => {
  const { items, shippingDetails } = req.body;

  try {
    // Save order to the database
    const order = new Order({ items, shippingDetails });
    await order.save();



    // Send confirmation email
    const mailOptions = {
      from: 'haran2231@gmail.com',
      to: shippingDetails.email, // Ensure the email field is present in shippingDetails
      subject: 'Order Confirmation',
      text: `Thank you for your order! Your order ID is ${order._id}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Error sending email' });
      }
      console.log('Email sent:', info.response);
    });

    res.status(201).json({ message: 'Order placed successfully', order });
    
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Error placing order' });
  }
});

module.exports = router;
