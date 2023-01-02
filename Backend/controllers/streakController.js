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
  const { date, attempts } = req.body;

  try {
    // const userId = req.user._id;
    const streak = await Streak.create({
      date,
      attempts,
      // userId,
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
  try {
    const resetGoal = await Streak.findOneAndUpdate(req.body, {
      new: true,
    });

    res.status(200).json(resetStreak);
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};

module.exports = { getStreak, setStreak, resetStreak };
