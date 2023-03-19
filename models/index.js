const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./Comments');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Blog.hasMany(Comments, {
    foreignKey: 'blog_post_id',
    onDelete: 'CASCADE',
});

Comments.belongsTo(Blog, {
    foreignKey: 'blog_post_id',
});

module.exports = { User, Blog, Comments };