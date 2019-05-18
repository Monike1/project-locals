const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  name: String,
  path: String,
  originalName: String,
  postText: String
}, {
  timestamps: { createdAt: "created_At", updatedAt: "updated_At"}
});

var Picture = mongoose.model("Picture", pictureSchema);

module.exports = Picture;