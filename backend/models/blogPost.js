const mongoose = require('mongoose');



const blogPostSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  likes: { type: Number},
  dislikes: { type: Number }
});

module.exports = mongoose.model('blogPost', blogPostSchema);