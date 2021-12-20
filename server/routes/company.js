const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Company = require("../models/Company.model")
const Session = require("../models/Session.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/create", async (req, res) => {
  const {name, foundationDate, fiscalCode, email, userId} = req.body
  try {
    
    if (!name) {
      return res.status(400).json({errorMessage: "Please provide a name for your company"})
    }
    if (!email) {
      return res
      .status(400)
      .json({ errorMessage: "Please provide the email." });
    }
    Company.findOne({email }).then((found) => {
      if (found) {
        return res.status(400).json({ errorMessage: "This company has already an account." })
      } 
    })
    if (name && foundationDate && fiscalCode && email) {
      const newCompany = await Company.create({
        name: name,
        foundationDate: foundationDate,
        fiscalCode: fiscalCode,
        email: email,
        user: userId,
      })
      const user = await User.findByIdAndUpdate(userId, {$push:{companies: newCompany._id}})
      
        return res.status(200).json(newCompany);
      } else {
        return res.status(400).json({ errorMessage: "Please fill all the information required" })
      } 
  }catch(err){
    res.status(500).json({ errorMessage: error.message });
} 
})

router.get("/my-company", async (req, res) => {
  
  const accessToken = req.headers.authorization;
  // console.log(accessToken)
  try{
    const session = await Session.findById(accessToken).populate("user");
    const companiesArray = await Company.find({user:{$eq: session.user._id}}).populate("user") 
    res.status(200).json(companiesArray);
  }catch(err){
    console.log(err)
    return res.status(500).json({errorMessage: err.toString()});
  }
});
 
module.exports = router