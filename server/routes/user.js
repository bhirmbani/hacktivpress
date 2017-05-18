const express = require('express');
const router = express.Router();
const User = require('../controllers/user');
const auth = require('../helpers/verify');
const passport = require('passport')

router.get('/', auth.isLogin, User.getAll);

router.post('/signin', passport.authenticate('local', {session: false}), function(req, res) {
    var user = req.user;
    res.send(user);
    console.log('router post signin', user)
});

router.post('/signup', User.signup);

module.exports = router;