const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

router.post('/', communityController.createPost);
router.get('/:courseId', communityController.getPostsByCourse);
router.post('/post/:communityId', communityController.addComment);

module.exports = router;
