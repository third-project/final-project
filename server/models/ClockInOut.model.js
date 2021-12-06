const { Schema, model } = require("mongoose");

const clockInOutSchema = new Schema(
  {
      currentDate:{
        type: Date,
        required: true,
      },

    startHour: {
      type: Date,
      required: true,
    },
    endHour: {
      type: Date,
      required: true,
    },
    summary: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const ClockInOut = model("ClockInOut", clockInOutSchema);

module.exports = ClockIn;