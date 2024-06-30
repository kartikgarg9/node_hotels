const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/hotels";

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
