const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

router.post('/', progressController.trackProgress);
router.get('/:userId', progressController.getUserProgress);

module.exports = router;
