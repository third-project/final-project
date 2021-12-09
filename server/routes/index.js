const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./users")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

router.use("/user", userRoutes)

module.exports = router;
