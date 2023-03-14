const sequelize = require('../config/connection');
const { User, Blog, Comments } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });   

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blog.bulkCreate(blogData, {
    returning: true,
  });

  await Comments.bulkCreate(commentsData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();