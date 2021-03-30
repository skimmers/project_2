const router = require("express").Router();
const userRoutes = require("./userRoutes");
const trailRoutes = require("./trailRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/trails", trailRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
