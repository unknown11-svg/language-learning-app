const express = require('express');
const cors = require('cors');
const app = express();
const errorHandler = require('./middlewares/errorHandlers');
const helmet = require('helmet');

app.use(cors()); // ✅ Enable CORS for all routes
app.use(helmet());
// For JSON payloads (API requests)
app.use(express.json({ limit: '50mb' }));

// For file uploads (if you add multer later)
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(errorHandler);

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/lessons', require('./routes/lessonRoutes'));
app.use('/api/quizzes', require('./routes/quizRoutes'));

console.log("Registering /api/community routes");
app.use('/api/community', require('./routes/communityRoutes'));
app.use('/api/progress', require('./routes/progressRoutes'));




module.exports = app;
