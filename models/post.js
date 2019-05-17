const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String },
  img: { type: String },
  body: { type: String },
});

// 'posts' refers to the collection in locals database
const Post = mongoose.model('posts', postSchema);
module.exports = Post;