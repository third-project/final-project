const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");

//Middleware
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


//PATCH ROUTE - Edit user profile by ID

router.patch("/profile", isLoggedIn, async (req, res) => {
    const {_id, name, lastName, lastName2, dateOfBirth, identityCard, legalGender, phoneNumber} = req.body;
    try{
        console.log(req.body)
        const userUpdated = await User.findByIdAndUpdate(_id, req.body, {new:true})
    }catch(err){
        console.log((err))
    } 
    res.status(200).json({msg: "Changes made succesfully"})
})

module.exports = router