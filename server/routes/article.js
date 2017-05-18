const express = require('express');
const router = express.Router();
const auth = require('../helpers/verify');
const Article = require('../controllers/article');

router.post('/create', auth.isLogin, Article.create);

router.get('/', auth.isLogin, Article.getAll);

module.exports = router;