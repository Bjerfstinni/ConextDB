// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

// Signup route
app.post('/api/signup', async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  // Check if user already exists
  let user = await User.findOne({ email });
  if (user) return res.status(400).send('User already registered.');

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  user = new User({
    email,
    password: hashedPassword,
    firstName,
    lastName
  });

  await user.save();
  res.send('User registered successfully.');
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('Invalid email or password.');

  // Validate password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

  // Generate JWT token
  const token = jwt.sign({ _id: user._id }, 'your_secret_key');
  res.header('auth-token', token).send(token);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
