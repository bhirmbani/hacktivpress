const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hacktipress-bhira');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {console.log('Mongo Db connection success!')});

// passport
const userController = require('./controllers/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(userController.signin));

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(passport.initialize());

// routes
const user = require('./routes/user');
const article = require('./routes/article');

// use the routes
app.use('/api/user', user);
app.use('/api/article', article);

app.listen(app.get('port'), () => {
  console.log(`app listening on ${app.get('port')}`);
});

module.exports = app;