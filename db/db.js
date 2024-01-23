const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  await mongoose.connect(`${process.env.mongoURL}`);
  console.log("MongoDB is connected");
  console.log(process.env.mongoURL);
};
module.exports = { connect };
