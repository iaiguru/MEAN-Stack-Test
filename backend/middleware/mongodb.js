"use strict";
/*
 This file is one for connection to mongodb.
*/

const mongoose = require("mongoose");
const dbConfig = require("../config/db");
mongoose.connect(dbConfig.db, dbConfig.option);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.on("disconnected", () => {
  console.log("Mongoose default connection disconnected");
});
db.once("open", () => console.log("connected to database"));

module.exports = db;
