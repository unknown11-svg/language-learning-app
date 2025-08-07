const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/', quizController.createQuiz);
router.get('/course/:courseId', quizController.getQuizzesByCourse);
router.post('/submit/:quizId', quizController.submitQuiz);


module.exports = router;
