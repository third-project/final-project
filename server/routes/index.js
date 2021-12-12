const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./users")
const calendarRoutes = require("./calendar");
const timeOffRoutes = require("./time-off");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

router.use("/user", userRoutes)

module.exports = router;
