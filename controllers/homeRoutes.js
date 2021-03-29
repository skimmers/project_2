const router = require("express").Router();
const { Comment, User, Search } = require("../models");
const withAuth = require("../utils/auth");

//GET route to handle homepage 
router.get("/", withAuth, async (req, res) => {
  try {

    res.render("homepage", {
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to handle profile page
// Use withAuth middleware to prevent unauthorized access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to handle login page
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {

    if (req.session.logged_in) {
      res.redirect("/profile");
      return;
    }
  
    res.render("login");

  } catch (err) {

    res.status(500).json(err);

  }
});

// GET route to handle signup page
router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {

    if (req.session.logged_in) {
      res.redirect("/profile");
      return;
    }
  
    res.render("signup");

  } catch (err) {
    res.status(500).json(err);
  }
  
});

// GET route to handle results page based on search results by primary key
router.get("/results/:id", withAuth, async (req, res) => {
  try {
      const trailData = await Search.findByPk(req.params.id, {
          include: [
              { model: Comment },
              { model: User,
                  exclude: {
                      attributes: ['password']
                  },
              },
          ],
      });

      if (!trailData) {
        res.status(400).json({ message: 'Cannot find trail information.' });
        return;
      }

    const trails = trailData.get({ plain: true });


      res.render("results", {
        ...trails
      });

  } catch (err) {
      res.status(500).json(err);
  }

});

router.get('/comment', async (req, res) => {
  try {
    const getComment = await Comment.findAll({
      include: [
        { model: Search },
        { model: User,
          exclude: {
            attributes: ['password']
          } 
        }
      ]
    });

    if (!getComment) {
      res.status(400).json({ message: 'Cannot find comment.' });
      return;
    }

    const comments = getComment.get({ plain: true });
    res.json(comments);

    // const commentData = getComment.get({ plain: true });

    // res.json(commentData);

    // res.render('comment', commentInfo);
  
    } catch (err) {
        res.status(500).json(err);
    }
  });

// GET route to handle requests for comment data by primary key
router.get("/comment/:id",  async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        { model: Search },
        { model: User,
          exclude: {
            attributes: ['password']
          } 
        }
      ]
    });

    if (!commentData) {
      res.status(400).json({ message: 'Cannot find comment.' });
      return;
    }

    const comments = commentData.get({ plain: true });
    res.json(comments);

    res.render("comment", {
      ...comments
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
