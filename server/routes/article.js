const express = require('express');
const router = express.Router();
const auth = require('../helpers/verify');
const Article = require('../controllers/article');

router.post('/create', auth.isLogin, Article.create);

router.get('/', auth.isLogin, Article.getAll);

router.get('/:articleId', auth.isLogin, Article.getOne);

router.get('/findByCategory/:category', auth.isLogin, Article.getByCategory);

router.put('/edit/:articleId', auth.isLogin, Article.edit);

router.delete('/delete/:articleId', auth.isLogin, Article.delete);

module.exports = router;