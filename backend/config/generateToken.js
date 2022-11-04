const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { // Secret taken from .env file.
    expiresIn: "30d",
  });
};

module.exports = generateToken;
