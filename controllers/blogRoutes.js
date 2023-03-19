const router = require('express').Router();
const { Blog, Comments, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User,
      attributes: ['user_name']},],
     });

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
    res.render('blogPage', { blogList });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/upVote/:id', async (req, res) => {
  let updated;
  try {
    const blogData = await Blog.findByPk(req.params.id, {});
    let blogList = blogData.get({ plain: true });
    updated = {
      up_votes: blogList.up_votes + 1
    }
    try {
      const blog = await Blog.update(updated, {
        where: {
          id: req.params.id,
        },
      });
      res.redirect('/');
    } catch(err) {
      res.status(500).json(`Nested Error: ${err}`);
    }
  } catch(err) {
    res.status(500).json(`Parent Error: ${err}`);
  }
});

router.get('/downVote/:id', async (req, res) => {
  let updated;
  try {
    const blogData = await Blog.findByPk(req.params.id, {});
    let blogList = blogData.get({ plain: true });
    updated = {
      down_votes: blogList.down_votes + 1
    }
    try {
      const blog = await Blog.update(updated, {
        where: {
          id: req.params.id,
        },
      });
      res.redirect('/');
    } catch(err) {
      res.status(500).json(`Nested Error: ${err}`);
    }
  } catch(err) {
    res.status(500).json(`Parent Error: ${err}`);
  }
});

module.exports = router;
