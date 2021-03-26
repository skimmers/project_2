const User = require('./User');
const Search = require('./Search');

User.hasMany(Search, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Search.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Search };
