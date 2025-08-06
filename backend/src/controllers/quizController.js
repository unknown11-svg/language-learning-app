const Quiz = require('../models/quizModel');

// Get quiz questions for a lesson
exports.getQuizByLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const quiz = await Quiz.findOne({ lesson: lessonId });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Submit quiz answers and return score
exports.submitQuiz = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const { answers } = req.body;
    const quiz = await Quiz.findOne({ lesson: lessonId });

    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (q.correctOption === answers[i]) score++;
    });

    res.json({ score, total: quiz.questions.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
