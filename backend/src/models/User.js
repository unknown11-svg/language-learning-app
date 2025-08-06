const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed
  createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  progress: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserProgress' }],
  streak: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
