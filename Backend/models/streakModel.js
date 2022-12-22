const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const streakSchema = new Schema(
  {
    streak: {
      type: String,
    },

    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Streak", streakSchema);
