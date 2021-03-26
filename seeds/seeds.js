const sequelize = require('../config/connection');
const { User, Search } = require('../models');

const userData = require('./userData.json');
const exampleSearches = require('./searchData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Creates a user for each object in userData.json file
    const user = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    // randomly associates each search object in searchData.json with a user
    for (const search of exampleSearches) {
        await Search.create({
            ...search,
            user_id: user[Math.floor(Math.random() * user.length)].id
        });
    }

    process.exit(0);
}

seedDatabase();

