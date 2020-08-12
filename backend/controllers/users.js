const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Users = require("../models/User");

// @desc Update user
// @route PUT /api/v1/users/:id
// @access Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await Users.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});
