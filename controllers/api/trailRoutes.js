const router = require('express').Router();
const { User, Search, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const trailData = await Search.findAll({
            include: [
                { model: Comment },
                { model: User,
                    exclude: {
                        attributes: ['password']
                    },
                },
            ],
        });

        const allTrails = trailData.map(trail => trail.get({ plain: true }));
        res.status(200).json(allTrails);

        res.render('results', allTrails);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
