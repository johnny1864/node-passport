const express = require('express');
const router = express.Router();

// LOGIN PAGE
router.get('/login', (req, res) => {
  res.render('login');
});

// REGISTER PAGE
router.get('/register', (req, res) => {
  res.render('register');
});

// REGISTER
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // REQUIRED FIELD VALIDATION
  if (!name || !email || !password || !password2) {
    errors.push({ message: 'Please fill in required fields' });
  }

  // PASSWORD MATCH VALIDATION
  if (password !== password2) {
    errors.push({ message: 'Passwords do not match' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    res.send('pass');
  }
});

module.exports = router;
