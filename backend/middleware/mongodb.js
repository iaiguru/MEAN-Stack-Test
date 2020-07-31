const mongoose = require("mongoose");
const dbConfig = require("../config/db.config");
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb://${user}:${password}@${dbConfig.host}?replicaSet=eu-9`,
  dbConfig.options
);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.on("disconnected", () => {
  console.log("Mongoose default connection disconnected");
});
db.once("open", () => console.log("connected to database"));

module.exports = db;
