const express = require("express");

// controller functions
const {
  getStreak,
  setStreak,
  resetStreak,
} = require("../controllers/streakController");

const router = express.Router();

// set user Streak
router.post("/streak", setStreak);

// get Streaks
router.get("/streak", getStreak);

// get single streak
router.get("/streak/:id", getStreak);

// Reset streak
router.put("/streak/:id", resetStreak);

module.exports = router;
