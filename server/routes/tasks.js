const router = require("express").Router()
const mongoose = require("mongoose")
const User = require("../models/User.model")
const Task = require("../models/Task.model")
const Session = require("../models/Session.model")


const isLoggedIn = require("../middleware/isLoggedIn")

router.post("/create", async(req,res)=>{
    const {description} = req.body
    try{
        const session = await Session.findById(accessToken).populate("user")
        const user = session.user

        if(req.body.description){
            const newTask = await Task.create({
                description: req.body.description
            });
            return res.status(200).json(newTask)
        }else{
            return res. status(400).json({errorMessage: "Please provide a task description"});
        }
    } catch(err){
        console.log(err)
        return res.status(500).json({errorMessage: err.toString()})
    }
})

router.get("/all-mine", isLoggedIn, async (req, res) => {
  
    const accessToken = req.headers.authorization;
    try{
      const session = await Session.findById(accessToken).populate("user");
      const taskArray = await Task.find({user:{$eq: session.user._id}}).populate("user");
      return res.status(200).json(taskArray);
    }catch(err){
      console.log(err)
      return res.status(500).json({errorMessage: err.toString()});
    }
  });

module.exports = router;
