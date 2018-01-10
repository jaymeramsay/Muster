const express = require('express');
const methodOverride = require('method-override')
const PORT = process.env.PORT || 7070;
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

const users = require('./routes/routes.users');
const items = require('./routes/routes.items');
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
app.use(express.static(__dirname + "../public"));
app.use(express.static(__dirname + "../build"));


// sets up initial page
app.get('/', (req, res, next) => {
  res.send('booyah');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});




module.exports = app;
