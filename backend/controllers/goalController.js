const asyncHandler = require("express-async-handler");

//@desc     Update Goal
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).send({ message: "Getting goals" });
});

//@desc     Update Goal
//@route    POST /api/goals
//@access   Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).send({ message: "Setting goal" });
});

//@desc     Update Goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).send({ message: `updating goal ${req.params.id}` });
});

//@desc     Delete Goal
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).send({ message: `deleting goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
