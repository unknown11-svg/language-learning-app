const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/lessons', require('./routes/lessonRoutes'));
app.use('/api/quizzes', require('./routes/quizRoutes'));
app.use('/api/community', require('./routes/communityRoutes'));
app.use('/api/progress', require('./routes/progressRoutes'));

module.exports = app;
