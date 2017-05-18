const User = require('../models/user');
const passwordHash = require('password-hash')
const verify = require('../helpers/verify.js')
const methods = {};

methods.signup = (req, res, next) => {
  var name = req.body.name;
  var username = req.body.username;
  var password = passwordHash.generate(req.body.password);
  var role = 'User';
  User.create({
    name: name,
    username: username,
    password: password,
    role: role
  }, (err, user) => {
    if(err) {
      res.json({
        error: err,
        success: false,
      })
    } else {
      res.json({
        user: user,
        success: true
      })
    }
  })
}

methods.signin = (username, password, next) => {
  User.findOne({username: username}, (err, user) => {
    if(!user) {
      next(null, {message: 'username atau password Anda salah', success: false})
    }
      else if(passwordHash.verify(password, user.password)) {
        let data = Object.assign({}, user.toJSON());
        next(null, {message: 'login sukses', token: verify.auth(data), success: true, user: data});
        console.log(data)
      } else {
        next(null, {message: 'password anda salah', success: false})
      }
  })
}

methods.getAll = (req, res, next) => {
  User.find({}, (err, users) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      res.json({users: users, success: true});
    }
  })
}

module.exports = methods;