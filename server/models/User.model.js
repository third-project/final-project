const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    lastName2: { type: String },
    dateOfBirth: { type: String, default: Date },
    hiringDate: { type: Date },
    legalGender: { type: String, enum: ["Female", "Male", "Other"] },
    identityCard: { type: String },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    role: { type: String, enum: ["Employee", "Boss"], default: "Boss" },
    jobTitle: {type: String},
    clockInOut: [{ type: Schema.Types.ObjectId, ref: "ClockInOut" }],
    email: {
      type: String,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Email not valid"],
    },
    phone: { type: Number, match: [/^[679]{1}[0-9]{8}$/, "Number not valid"] },
    subordinates: [{ type: Schema.Types.ObjectId, ref: "User" }],
    workingFrom: { type: String, enum: ["Presential", "Remote", "Mixed"] },
    photo: { type: String },
    companies: [{ type: Schema.Types.ObjectId, ref: "Company" }],
    tasks:[{type:Schema.Types.ObjectId, ref:"Task"}]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
