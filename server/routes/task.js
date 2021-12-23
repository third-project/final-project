const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Task = require("../models/Task.model");
const Session = require("../models/Session.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/create", isLoggedIn, async (req, res) => {
  const { description, userId } = req.body.task;

  try {
    if (!description) {
      return res
        .status(400)
        .json({ errorMessage: "Please provide a task description" });
    }
    Task.findOne({ description }).then((found) => {
      if (found) {
        return res
          .status(400)
          .json({ errorMessage: "This task has been already created" });
      }
    });

    const newTask = await Task.create({
      description: description, user: userId
    });
    const user = await User.findByIdAndUpdate(userId, {
      $push: { tasks: newTask._id },
    });

    return res.status(200).json(newTask);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

router.get("/my-tasks/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const userFromDb = await User.findById(userId).populate("tasks");
    res.status(200).json({tasks: userFromDb.tasks});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errorMessage: err.toString() });
  }
});

router.post("/delete", isLoggedIn, async (req, res) => {
  const accessToken = req.headers.authorization;
  try {
    const session = await Session.findById(accessToken).populate("user");
    const response = await Task.find({
      user: { $eq: session.user._id },
    }).populate("user");

  } catch (err) {
    console.log(err);
    return res.status(500).json({ errorMessage: err.toString() });
  }
});

module.exports = router;
