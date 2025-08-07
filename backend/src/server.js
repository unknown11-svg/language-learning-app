// backend/server.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app'); // <- use app.js

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
