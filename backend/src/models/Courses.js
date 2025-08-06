const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  language: String,
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
  units: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' }],
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }]
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
