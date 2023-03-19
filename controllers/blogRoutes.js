const router = require('express').Router();
const { Blog, Comments } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({ });

    const blogList = blogData.map((blogs) =>
      blogs.get({ plain: true })
    );
    res.render('homepage', { blogList });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blogPost/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: Comments, },],
     });
    const blogList = blogData.get({ plain: true });
    console.log(blogList);
    res.render('blogPage', { blogList });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
