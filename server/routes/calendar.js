const router = require("express").Router();

const Session = require("../models/Session.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/all-mine", isLoggedIn, async (req, res) => {
  
  const accessToken = req.headers.authorization;
  try{
    const session = await Session.findById(accessToken).populate({
      path:"user",
      populate:{
        path:"calendarRequests",
        model:"CalendarRequest"
      }
    });
    return res.status(200).json(session.user.calendarRequests);
  }catch(err){
    console.log(err)
    return res.status(500).json({errorMessage: err.toString()});
  }
});


module.exports = router;
