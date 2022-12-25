const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const streakSchema = new Schema(
  {
    date: {
      type: Date,
    },

    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Streak", streakSchema);
