const sequelize = require('../config/connection');
const { User, Search, Comment } = require('../models');

const userData = require('./userData.json');
const searchData = require('./searchData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Creates a user for each object in userData.json file
    const user = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    // randomly associates each search object in searchData.json with a user
    for (const search of searchData) {
        await Search.create({
            ...search,
            user_id: user[Math.floor(Math.random() * user.length)].id
        });
    }

    // randomly associates each search object in searchData.json with a user
    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            user_id: user[Math.floor(Math.random() * user.length)].id,
            search_id: user[Math.floor(Math.random() * user.length)].id
        });
    }

    process.exit(0);
}

seedDatabase();

