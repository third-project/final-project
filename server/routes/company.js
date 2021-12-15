const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Company = require("../models/Company.model")
const Session = require("../models/Session.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/create", isLoggedIn, async (req, res) => {
    const accessToken = req.headers.authorization;
    const {name, foundationDate, fiscalCode, email} = req.body
    try {
      const session = await Session.findById(accessToken).populate("user");
      const user = session.user;
  
      if (name && foundationDate && fiscalCode && email) {
        const newCompany = await Company.create({
          name: name,
          foundationDate: foundationDate,
          fiscalCode: fiscalCode,
          email: email,
          user: user._id,
        });
        return res.status(200).json(newCompany);
      } else {
        return res.status(400).json({ errorMessage: "Input values are invalid" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errorMessage: err.toString() });
    }
});

module.exports = router