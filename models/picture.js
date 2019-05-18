const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  name: { type: String },
  path: { type: String },
  originalName: { type: String },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at"}
});

// 'posts' refers to the collection in locals database
const Picture = mongoose.model('pictures', pictureSchema);
module.exports = Picture;