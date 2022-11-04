const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Bearer & token are separated by a space. So, we split it by space and take the second element of the array.

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // the JWT comes from .env file we created

      req.user = await User.findById(decoded.id).select("-password"); // finds the user & return it without password

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
