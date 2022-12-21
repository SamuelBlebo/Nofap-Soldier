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

// get User streak
router.get("/streak/:id", getStreak);

// Reset streak
router.put("/streak/:id", resetStreak);

module.exports = router;
