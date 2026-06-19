const mongoose = require("mongoose");

const connectMongo = async (url) => {
  // mongoose
  //   .connect("mongodb://localhost:27017/mongoApp")
  //   .then(() => console.log("mongo connected..."))
  //   .catch((err) => console.log("mongo connection error:", err));

  return mongoose.connect(url);
};

module.exports = { connectMongo };
