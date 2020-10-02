// ===== DEPENDECIES ===== //
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');

// ===== CONFIGURATION ===== //
const app = express();
const db = mongoose.connection;
require('dotenv').config();

// ===== PORT ===== //
const PORT = process.env.PORT || 3000

// ====== Database ====== //
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, autoIndex: false }
);

// ===== MIDDLEWARE ===== //
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// Allow the database to communicate with the backend for the applications the user enters.
const applicationController = require('./controllers/applications.js');
app.use('/application', applicationController);

// Create new users through the user model and controller
const userController = require('./controllers/users.js');
app.use('/user', userController);

// Create sessions when the user logs in with the correct email and password, keeps the user logged in.
const sessionController = require('./controllers/session.js');
app.use('/session', sessionController);

// Enable CORS to mitigate any CORS errors on the browser
app.get('/products/:id', (req,res,next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// ===== Error / success ===== //
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


// ===== Listener ===== //
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

app.listen(80, () => {
  console.log('CORS-enabled web server listening on port 80');
})
