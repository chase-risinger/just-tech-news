const User = require('./User');
const Post = require('./Post');

// create associations (one-2-many, one-2-one, many-2-many etc.)
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//symmetry
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };