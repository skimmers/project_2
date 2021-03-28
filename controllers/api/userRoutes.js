const router = require('express').Router();
const { User, Comment, Search } = require('../../models');
const withAuth = require('../../utils/auth');

// *********** Need get route for user profile page

// POST route to handle creating a new comment
router.post('/comment', withAuth, async (req, res) => {
  try {
    const createComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });

    console.log(createComment);
    
    const commentData = createComment.map(comment => comment.get({ plain: true }));
    res.json(commentData);

    res.render('results', commentData);

  } catch (err) {
    res.status(500).json(err);
  }
})

// GET route for a specific user thread page
router.get('/comment/:id', withAuth, async (req, res) => {
  try {
      const getComment = await Comment.findByPk(req.params.id, {
          include: {
              model: Search,
              model: User,
              exclude: {
                  attributes: ['password']
              },
          },
      });
      console.log(getComment);
  
      const commentInfo = getComment.map(comment => comment.get({ plain: true }));
      res.json(commentInfo);
  
      res.render('comment', commentInfo);

  } catch (err) {
      res.status(500).json(err);
  }
});


// POST route for login page
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// POST route for logout page
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// POST route for signup page
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
