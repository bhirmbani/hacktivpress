const Article = require('../models/article');
const helperTo = require('../helpers/verify');
const methods = {};

methods.create = (req, res, next) => {
  let decoded = helperTo.decode(req.headers.token);
  console.log('this is decoded in create article controller');
  console.log(decoded);
  var title = req.body.title;
  var content = req.body.content;
  var category = req.body.category;
  Article.create({
    author: decoded._id,
    title: title,
    content: content,
    category: category
  }, (err, article) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      res.json({article: article, success: true, msg: 'article created'});
    }
  })
}

methods.getAll = (req, res, next) => {
  Article.find({}, (err, articles) => {
    if(err) {
      res.json({error: err, success: false})
    } else {
      res.json({articles: articles, success: true})
    }
  })
}

methods.getOne = (req, res, next) => {
  let articleId = req.params.articleId;
  Article.findOne({_id: articleId}, (err, article) => {
    if(err) {
      res.json({error: err, success: false})
    } else {
      res.json({article: article, success: true})
    }
  })
}

methods.edit = (req, res, next) => {
  let articleId = req.params.articleId;
  Article.findOne({_id: articleId}, (err, article) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      article.title = req.body.title ? req.body.title : article.title;
      article.content = req.body.content ? req.body.content : article.content;
      article.category = req.body.category ? req.body.category : article.category;
      article.save();
      res.json({article: article, success: true, msg: 'article updated'})
    }
  })
}

methods.delete = (req, res, next) => {
  let articleId = req.params.articleId;
  Article.findByIdAndRemove(articleId, (err, done) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      res.json({done: done, msg: 'article deleted'});
    }
  })
}

methods.getByCategory = (req, res, next) => {
  let category = req.params.category;
  Article.find({category: category}, (err, articles) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      res.json({articles: articles, success: true});
    }
  })
}

methods.getByAuthor = (req, res, next) => {
  let author = req.params.userId;
  Article.find({}).populate('author')
  .exec((err, authors) => {
    if(err) {
      res.json({error: err, success: false});
    } else {
      res.json({authors: authors, success: true});
    }
  })
}

module.exports = methods;