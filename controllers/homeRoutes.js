const router = require('express').Router();
const { Blog } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({ });

    const blogList = dbBlogData.map((blog) =>
      blog.get({ plain: true })
    );
    res.render('homepage', {blogList});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;