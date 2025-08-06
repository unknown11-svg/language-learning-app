const Community = require('../models/Community');

// Create a community post
exports.createPost = async (req, res) => {
  try {
    const post = new Community(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all posts for a course
exports.getPostsByCourse = async (req, res) => {
  try {
    const posts = await Community.find({ courseId: req.params.courseId });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a comment to a post
exports.addComment = async (req, res) => {
  try {
    const post = await Community.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.comments.push(req.body);
    await post.save();

    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
