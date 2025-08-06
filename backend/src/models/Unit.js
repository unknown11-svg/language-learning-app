const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

module.exports = mongoose.model('Unit', unitSchema);
