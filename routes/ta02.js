//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

// Create an array to store the usernames
const users = [];
// Declare message variable
let message = "";

// Create middleware to handle the POST from the form
router.post('/addUser', (req, res, next) => {
  if (!users.includes(req.body.user)) {
    users.push(req.body.user);
  } else {
    message = "The user is already registered.";
  }
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  if (users.includes(req.body.user)) {
    users = users.filter(user => user !== req.body.user);
  } else {
    message = "Sorry, we could not find the user.";
  }
  res.redirect('/ta02');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    usernames: users,
    message: message
  });
});

module.exports = router;
