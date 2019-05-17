const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  email: { type: String },
  city: { type: String },
  street: { type: String },
  zipcode: { type: String },
  posts: [ { type : Schema.Types.ObjectId, ref : 'posts' } ],
  favourites: [ { type : Schema.Types.ObjectId, ref : 'posts' } ],
  password: { type: String },
}, {timestamps: true});

// 'users' refers to the collection in locals database
const User = mongoose.model('users', userSchema);
module.exports = User;


