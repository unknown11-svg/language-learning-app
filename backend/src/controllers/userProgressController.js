const UserProgress = require('../models/UserProgress');

// Update or create progress for a user on a lesson
exports.updateProgress = async (req, res) => {
  try {
    const { userId, courseId, lessonId, status, score } = req.body;
    const progress = await UserProgress.findOneAndUpdate(
      { userId, courseId, lessonId },
      { status, score },
      { new: true, upsert: true }
    );
    res.json(progress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get progress for a specific user
exports.getUserProgress = async (req, res) => {
  try {
    const progress = await UserProgress.find({ userId: req.params.userId });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get progress for a user in a specific course
exports.getUserProgressInCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const progress = await UserProgress.find({ userId, courseId });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
