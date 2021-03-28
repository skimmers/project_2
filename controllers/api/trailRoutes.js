const router = require('express').Router();
const { User, Search, Comment } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const trailData = await Search.findByPk(req.params.id, {
            include: {
                model: Comment,
                model: User,
                exclude: {
                    attributes: ['password']
                },
            },
        });

        console.log(trailData);
        const getTrail = trailData.map(trail => trail.get({ plain: true }));
        res.status(400).json(trailData);

        res.render('results', getTrail);

    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
