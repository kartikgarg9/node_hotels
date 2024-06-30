const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL=process.env.MONGODB_URL_LOCAL;

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
  useNewUrlparser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to MongoDb server");
});

db.on("error", (err) => {
  console.error(" MongoDb connection server ", err);
});

db.on("disconnected", () => {
  console.log(" MongoDb disconnected ");
});

//export database connection

module.exports = db;
