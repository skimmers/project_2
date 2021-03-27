const router = require('express').Router();
const { User, Search, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const trailData = await Search.findOne();

        res.status(400).json(trailData);
    } catch (err) {
        res.status(500).json(err);
    }
});



