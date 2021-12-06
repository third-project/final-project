const { Schema, model } = require("mongoose");

const clockInSchema = new Schema(
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

const ClockIn = model("ClockIn", clockInSchema);

module.exports = ClockIn;