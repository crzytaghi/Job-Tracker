const express = require('express');
const Application = require('../models/application.js');
const app = express.Router();

// Update - Put
app.put('/:id', (req,res) => {
  Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updatedApp) => {

    }
  )
})

// POST - CREATE
app.post('/', (req,res) => {
  Application.create(req.body, (err, createdApp) => {
    if (err) {
      res.send(err)
    } else {
      Application.find({}, (err, allApps) => {
        res.json(allApps)
      })
    }
  })
})

module.exports = app;
