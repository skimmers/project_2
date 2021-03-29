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

// GET route to handle results page based on search results
router.get('/results/:id', async (req, res) => {
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

      // const getTrail = trailData.map(trail => trail.get({ plain: true }));
      // res.status(200).json(trailData);

    const trails = trailData.get({ plain: true });


      res.render('results', {
        ...trails
      });

  } catch (err) {
      res.status(500).json(err);
  }

});

// router.get("/comment")

module.exports = router;
