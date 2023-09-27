require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 7004,
  MONGO_URI: process.env.MONGO_URI
};
