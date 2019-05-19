const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: String,
  path: String,
  originalName: String,
  postText: String,
  author: [ { type : Schema.Types.ObjectId, ref : 'users' } ]// works
}, {
  timestamps: { createdAt: "created_At", updatedAt: "updated_At"}
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;