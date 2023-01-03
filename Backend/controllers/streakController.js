const Streak = require("../models/streakModel");
const mongoose = require("mongoose");

// @desc    Get streak
// @route   GET /api/streak
// @access  Private

const getStreak = async (req, res) => {
  const streak = await Streak.find({ user: req.user_id });

  res.status(200).json(streak);
};

// @desc    Set streak
// @route   POST /api/streak
// @access  Private

const setStreak = async (req, res) => {
  const { date, attempts, userEmail } = req.body;

  try {
    const streak = await Streak.create({
      userEmail,
      date,
    });
    res.status(200).json(streak);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Reset streak
// @route   PUT /api/streak
// @access  Private

const resetStreak = async (req, res) => {
  const { userEmail, date, attempts } = req.body;

  try {
    const resetGoal = await Streak.findOneAndUpdate(
      { userEmail },
      {
        date,
        attempts,
      }
    );

    res.status(200).json(resetStreak);
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};

module.exports = { getStreak, setStreak, resetStreak };
