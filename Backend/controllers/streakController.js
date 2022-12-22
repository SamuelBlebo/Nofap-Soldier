const Streak = require("../models/streakModel");
const mongoose = require("mongoose");

// @desc    Set streak
// @route   POST /api/streak
// @access  Private

const setStreak = async (req, res) => {
  try {
    const streak = await Streak.Create({
      streak: req.body.date,
      user: req.user._id,
    });

    res.status(200).json(streak);
  } catch (err) {
    console.log(err);
    res, status(400);
  }
};

// @desc    Get streak
// @route   GET /api/streak
// @access  Private

const getStreak = async (req, res) => {
  const user_id = req.user._id;
  try {
    const streak = await Streak.find(user_id);

    if (!streak) {
      res.status(400);
      throw new Error("Streak not found");
    }

    res.status(200).json(streak);
  } catch (err) {
    console.log(err);
    res, status(400);
  }
};

// @desc    Reset streak
// @route   PUT /api/streak
// @access  Private

const resetStreak = async (req, res) => {
  try {
    const streak = await Streak.findOne(req.params.id);

    const resetGoal = await Streak.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(resetStreak);
  } catch (err) {
    console.log(err);
    res, status(400);
  }
};

module.exports = { getStreak, setStreak, resetStreak };
