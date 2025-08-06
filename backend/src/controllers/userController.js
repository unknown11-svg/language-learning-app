const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST /api/users/register
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/users/login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/users/profile/:id
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/users/progress/:id
exports.getUserProgress = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('progress');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user.progress);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Logout user
exports.logoutUser = async (req, res) => {
  try {
    // If using token-based auth (e.g., JWT):
    req.session.destroy(() => {
      res.clearCookie('token'); // Assuming token is stored in a cookie
     return res.status(200).json({ message: 'Logout successful' });
    });

  } catch (error) {
    res.status(500).json({ message: 'Error logging out', error });
  }
};
