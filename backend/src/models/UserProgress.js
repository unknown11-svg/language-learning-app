const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  score: Number,
  completed: { type: Boolean, default: false },
  lastReviewed: Date
});

module.exports = mongoose.model('UserProgress', userProgressSchema);
