const mongoose = require('mongoose')
const Schema = mongoose.Schema

let articleSchema = new Schema({
  title: {
      type: String
  },
  content: {
      type: String
  },
  category: {
      type: String
  },
  author: {type: Schema.Types.ObjectId, ref: 'User'}
})

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;