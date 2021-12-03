require("dotenv/config");

//MongoDB
module.exports = {
  MONGO_URI_DEVELOPMENT: process.env.MONGO_URI_DEVELOPMENT,
  MONGO_URI_PRODUCTION: process.env.MONGO_URI_PRODUCTION,
};
