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

// GET route to handle results page
router.get("/results", withAuth, async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {

    const searchData = await Search.findOne({
      where: {
        trail_name: req.body.trail_name
      },
      include: {
        model: Comment,
        model: User,
        exclude: {
          attributes: ['password']
        },
      },
    }); 

    console.log(searchData);
    const resultData = searchData.map(result => result.get({ plain: true }));
    res.status(400).json(resultData);

    res.render('results', resultData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/comment")

module.exports = router;
