const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  contentType: { type: String, enum: ['text', 'multiple-choice', 'audio', 'image'] },
  content: mongoose.Schema.Types.Mixed,
  media: [String], // URLs to media files
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' }
});

module.exports = mongoose.model('Lesson', lessonSchema);
