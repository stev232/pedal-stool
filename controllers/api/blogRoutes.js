const router = require('express').Router();
const { Blog, Comments } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({});
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: Comments }],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog posts found with that id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create(req.body);
    res.status(200).json(blogData);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
