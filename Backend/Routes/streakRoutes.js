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

// get single streak
router.get("/:id", getStreak);

// Reset streak
router.put("/:id", resetStreak);

module.exports = router;
