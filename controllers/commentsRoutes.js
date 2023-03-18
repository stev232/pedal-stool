const router = require('express').Router();
const { Comments } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const commentsData = await Comments.findOne({ where: { blog_post_id: req.params.id } });
    if (!commentsData) {
      res.status(400).json({ message: 'there are no comments for this post' });
      return;
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const commentsData = await Comments.create(req.body);
    res.status(200).json(commentsData);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
