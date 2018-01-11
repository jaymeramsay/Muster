const express = require('express');
const methodOverride = require('method-override')
const PORT = process.env.PORT || 7070;
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

const users = require('./routes/routes.users');
const items = require('./routes/routes.items');
const path = require('path');
// const auth = require('./routes/auth');

// http method middleware for PATCH and DELETE
app.use(methodOverride('_method'));

// forms handling
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// authorization
app.use(cookieParser());

// routes
app.use('/users', users);
app.use('/items', items);
// app.use('/auth', auth);

// adds react
app.use(express.static(path.join(__dirname, "../build")));

//CORS between React server and this server
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});




module.exports = app;
