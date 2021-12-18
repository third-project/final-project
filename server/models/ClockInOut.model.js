const { Schema, model } = require("mongoose");

const clockInOutSchema = new Schema(
  {
      startDate:{
        type: Date,
        required: true,
      },

      endDate:{
        type: Date,
      },

    workingHours: {
      type: Number,
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const ClockInOut = model("ClockInOut", clockInOutSchema);

module.exports = ClockInOut;