const router = require("express").Router();

const CalendarRequest = require("../models/CalendarRequest.model");
const Session = require("../models/Session.model");
const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/all-mine", isLoggedIn, async (req, res) => {
  
  const accessToken = req.headers.authorization;
  try{
    const session = await Session.findById(accessToken).populate("user");
    const calendarArray = await CalendarRequest.find({user:{$eq: session.user._id}}).populate("user");
    return res.status(200).json(calendarArray);
  }catch(err){
    console.log(err)
    return res.status(500).json({errorMessage: err.toString()});
  }
});

router.get("/all/:companyId", isLoggedIn, async (req, res) => {
  const companyId = req.params.companyId;
  try{
    const companyUsers = await User.find({companies:{$eq:companyId}});
    console.log(companyUsers);
    const companyUserIds = companyUsers.map(user => user._id.toString());
    console.log(companyUserIds);
    const calendarRequests = await CalendarRequest.find({user: {$in:companyUserIds}});
    return res.status(200).json(calendarRequests);
  }catch (err) {
    console.log(err);
    return res.status(500).json({ errorMessage: err.toString() });
  }
});


module.exports = router;
