const router = require("express").Router();
const ClockInOut = require("../models/ClockInOut.model");
const Session = require("../models/Session.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/start",isLoggedIn,async (req,res) => {
    const accessToken = req.headers.authorization; 
    try{
        const session = await Session.findById(accessToken).populate("user");
        const user = session.user; 

        if(req.body.startDate) {
            const clockIn = await ClockInOut.create({
                startDate: req.body.startDate,
                user: user._id  
            });
            return res.status(200).json(clockIn);
        }else {
            return res.status(400).json({ errorMessage: "Start date is invalid" });
          }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ errorMessage: err.toString() });
      }
})

module.exports = router;