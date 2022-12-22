const Streak = require("../models/streakModel");
const mongoose = require("mongoose");

// @desc    Get streak
// @route   GET /api/streak
// @access  Private

const getStreak = async (req, res) => {
  const streak = await Streak.find();

  res.status(200).json(streak);
};

// @desc    Set streak
// @route   POST /api/streak
// @access  Private

const setStreak = async (req, res) => {
  const { streak } = req.body;

  const workout = await Streak.create({ streak });

  res.status(200).json(streak);
};

// @desc    Reset streak
// @route   PUT /api/streak
// @access  Private

const resetStreak = async (req, res) => {
  try {
    const streak = await Streak.findOne(req.params.id);

    const resetGoal = await Streak.findOneAndUpdate(req.body, {
      new: true,
    });

    res.status(200).json(resetStreak);
  } catch (err) {
    console.log(err);
    res, status(400);
  }
};

module.exports = { getStreak, setStreak, resetStreak };
