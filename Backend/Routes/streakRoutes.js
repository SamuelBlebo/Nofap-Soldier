const express = require("express");

// controller functions
const {
  getStreak,
  setStreak,
  resetStreak,
} = require("../controllers/streakController");

const router = express.Router();

// set user Streak
router.post("/", setStreak);

// get Streaks
router.get("/", getStreak);

// Reset streak
router.put("/", resetStreak);

module.exports = router;
