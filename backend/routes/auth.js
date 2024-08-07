const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const { authenticateJWT } = require('../middleware/auth'); // Ensure correct path


// Register Route
router.post('/register', async (req, res) => {
  const { username, email, mobile, gender, address, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      username,
      email,
      mobile,
      gender,
      address,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    req.session.user = user;
    res.status(200).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    req.session.userId = user._id;
    res.status(200).json({ 
      message: 'Logged in successfully',
      userId: user._id // Send user ID if needed on the frontend
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Logout Route
router.post('/logout', authenticateJWT, async (req, res) => {
  // const { user } = req.body;
  console.log("logged out");
  req.session.destroy((err) => {
      if (err) {
          console.error('Error destroying session', err);
          return res.status(500).send('Server error');
      }

      res.clearCookie('connect.sid'); // Clear the cookie if you're using cookies for session management
      res.status(200).json({ message: 'Logged out successfully' });
  });
});

// Profile Route
router.get('/profile/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

// Update user profile
router.put('/profile/:userId', async (req, res) => {
  try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
