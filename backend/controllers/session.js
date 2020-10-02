const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

// Send a post request to the database to create a session once the user logs in
router.post('/', (req,res) => {
  User.findOne({email:req.body.email}, (error, foundEmail) => {
    if(foundEmail === null) {
      res.json({message:'user not found'});
    } else {
      const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundEmail.password);
      if(doesPasswordMatch) {
        res.json(foundEmail)
      } else {
        res.json({message:'incorrect password'});
      }
    }
  });
});

// Test to see if the user is logged in on page load
router.get('/', (req,res) => {
  res.json(req.session.email)
})

module.exports = router;
