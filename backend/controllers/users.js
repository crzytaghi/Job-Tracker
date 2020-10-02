const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

router.post('/', (req,res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (error, createdEmail) => {
    // req.session.email = createdEmail; // SETS THE SESSION ON SIGN UP **** GETTING AN ERROR, 'CANNOT SET PROPERTY "EMAIL" OF UNDEFINED' ****
    res.json(createdEmail);
  })
});

module.exports = router;
