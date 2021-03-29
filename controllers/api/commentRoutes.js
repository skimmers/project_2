const router = require('express').Router();
const { User, Comment, Search } = require('../../models');
const withAuth = require('../../utils/auth');

// GET route for a specific user comment

// *** Put withAuth back in once we know the routes are good to go
router.get('/', async (req, res) => {
    try {
        const getComment = await Comment.findAll({
            include: [{
                model: Search,
                model: User,
                exclude: {
                    attributes: ['password']
                },
            }],
        });
    
        const commentInfo = getComment.map(comment => comment.get({ plain: true }));
        res.json(commentInfo);
    
        // res.render('comment', commentInfo);
  
    } catch (err) {
        res.status(500).json(err);
    }
  });
  
  // GET route for a specific user comment
  router.get('/:id', async (req, res) => {
    try {
        const getComment = await Comment.findByPk(req.params.id, {
            include: [{
                model: Search,
                model: User,
                exclude: {
                    attributes: ['password']
                },
            }],
        });
    
        res.status(200).json(getComment);
    
        // res.render('comment', commentInfo);
  
    } catch (err) {
        res.status(500).json(err);
    }
  });
  
  // POST route to handle creating a new comment
  router.post('/', async (req, res) => {
    try {
      const createComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id
      });
  
      console.log(createComment);
      
      const commentData = createComment.map(comment => comment.get({ plain: true }));
      res.json(commentData);
  
    //   res.render('results', commentData);
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;