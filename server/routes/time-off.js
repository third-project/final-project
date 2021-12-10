const router = require("express").Router();
const CalendarRequest = require("../models/CalendarRequest.model");
const Session = require("../models/Session.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/create", isLoggedIn, async (req, res) => {
  const accessToken = req.headers.authorization;
  try {
    const session = await Session.findById(accessToken).populate("user");
    const user = session.user;

    if (
      req.body.startDate &&
      req.body.endDate &&
      req.body.summary &&
      req.body.type
    ) {
      const newCalendarRequest = await CalendarRequest.create({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        summary: req.body.summary,
        user: user._id,
        type: req.body.type,
        approved: false,
      });
      return res.status(200).json(newCalendarRequest);
    } else {
      return res.status(400).json({ errorMessage: "Input values are invalid" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errorMessage: err.toString() });
  }
});

module.exports = router;
