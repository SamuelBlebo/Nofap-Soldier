const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const streakSchema = new Schema(
  {
    userEmail: {
      type: String,
    },
    date: {
      type: Date,
    },
    attempts: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Streak", streakSchema);
