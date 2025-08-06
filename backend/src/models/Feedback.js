const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  upvotes: { type: Number, default: 0 },
  suggestions: String
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
