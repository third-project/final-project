const { Schema, model } = require("mongoose");

const requestSchema = new Schema(
  {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    summary: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    type:{ type: String, enum: ["Holidays", "Illness", "Maternity / Paternity","Other"]},
  },
  {
    timestamps: true,
  }
);

const Request = model("Request", requestSchema);

module.exports = Request;
