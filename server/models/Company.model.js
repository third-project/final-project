const { Schema, model } = require("mongoose");

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    foundationDate: { type: Date },
    fiscalCode: { type: String },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Email not valid"],
    },
    phone: { type: Number, match: [/^[679]{1}[0-9]{8}$/, "Number not valid"] },
    employees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    logo: { type: String },
    approvedTimeRequest:[{ type: Schema.Types.ObjectId, ref: "CalendarRequest" }]
  },
  {
    timestamps: true,
  }
);

const Company = model("Company", companySchema);

module.exports = Company;