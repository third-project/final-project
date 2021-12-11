const { Schema, model } = require("mongoose");

const calendarRequestSchema = new Schema(
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
    approved: {type:Boolean}
  },
  {
    timestamps: true,
  }
);

const CalendarRequest = model("CalendarRequest", calendarRequestSchema);

module.exports = CalendarRequest;
