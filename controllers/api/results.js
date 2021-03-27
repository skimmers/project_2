const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/results", userRoutes);

module.exports = router;
