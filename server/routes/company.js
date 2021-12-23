const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Company = require("../models/Company.model");
const Session = require("../models/Session.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const bcrypt = require("bcrypt");
const saltRounds = 10;


router.post("/create", async (req, res) => {
  const { name, foundationDate, fiscalCode, email, userId } = req.body;
  try {
    if (!name) {
      return res
        .status(400)
        .json({ errorMessage: "Please provide a name for your company" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ errorMessage: "Please provide the email." });
    }
    Company.findOne({ email }).then((found) => {
      if (found) {
        return res
          .status(400)
          .json({ errorMessage: "This company has already an account." });
      }
    });
    if (name && foundationDate && fiscalCode && email) {
      const newCompany = await Company.create({
        name: name,
        foundationDate: foundationDate,
        fiscalCode: fiscalCode,
        email: email,
        user: userId,
      });
      const user = await User.findByIdAndUpdate(userId, {
        $push: { companies: newCompany._id },
      });

      return res.status(200).json(newCompany);
    } else {
      return res
        .status(400)
        .json({ errorMessage: "Please fill all the information required" });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: error.message });
  }
});

router.post("/add-employee/:companyId", async (req, res) => {
  const {
    name,
    lastName,
    email,
    hiringDate,
    password,
    role,
    jobTitle,
  } = req.body;

  const { companyId } = req.params;
  try {
    if (!name || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please provide the employee's name" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ errorMessage: "Please fill all the required inputs" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        errorMessage: "The password needs to be at least 8 characters long.",
      });
    }
    User.findOne({ email }).then((found) => {
      if (found) {
        return res
          .status(400)
          .json({ errorMessage: "This email has already an account." });
      }
      return bcrypt
        .genSalt(saltRounds)
        .then((salt) => bcrypt.hash(password, salt))
        .then(async (hashedPassword) => {
          if (name && lastName && email && password) {
            const newEmployee = await User.create({
              name: name,
              lastName: lastName,
              email: email,
              password: hashedPassword,
              hiringDate: hiringDate,
              role: role,
              jobTitle: jobTitle,
            });
            const companyUpdated = await Company.findByIdAndUpdate(companyId, {
              $push: { employees: newEmployee._id },
            });
            return res.status(200).json({companyUpdated, newEmployee, message: "Employee added successfully"})
          }
          return res.status(400).json({message: "You need to provide all the inputs"})
        });
    });
  } catch (err) {
    res.status(500).json({ errorMessage: error.message });
  }
});

router.get("/my-company/:userId", async (req, res) => {
  const userId = req.params.userId

  try {
    const userFromDB = await User.findById(userId).populate("companies");
    res.status(200).json(userFromDB.companies)
    console.log(userFromDB.companies)
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errorMessage: err.toString() });
  }
});

router.get("/employees/:companyId", async (req, res) => {
  const {companyId} = req.params
  try {
    const companyFromDB = await Company.findById(companyId).populate("employees");
    res.status(200).json(companyFromDB.employees);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errorMessage: err.toString() });
  }
});


router.patch("/employees/delete/:companyId/:userId", async (req, res) => {
  const {companyId, userId} = req.params
  try{
      const companyFromDB = await Company.findByIdAndUpdate(companyId, {$pull: {employees: userId}}) 
      res.status(200).json({msg: "Changes made succesfully", company: companyFromDB})
  } catch(err){
      console.log((err))
  }
});


module.exports = router;
