const router = require("express").Router();
const authRoutes = require("./auth");
const calendarRoutes = require("./calendar");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/calendar-requests",calendarRoutes);

module.exports = router;
