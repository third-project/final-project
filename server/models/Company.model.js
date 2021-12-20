const { Schema, model } = require("mongoose");

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    foundationDate: { type: String, default: Date },
    fiscalCode: { type: String },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Email not valid"],
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    phone: { type: Number, match: [/^[679]{1}[0-9]{8}$/, "Number not valid"] },
    employees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    logo: { type: String },
  },
  {
    timestamps: true,
  }
);

const Company = model("Company", companySchema);

module.exports = Company;