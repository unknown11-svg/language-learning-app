const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

router.post('/', communityController.createPost);
router.get('/:courseId', communityController.getPostsByCourse);
router.post('/post/:communityId', communityController.addComment);
router.post('/test', (req, res) => {
    res.json({ msg: 'Test route works', body: req.body });
  });
  

module.exports = router;
