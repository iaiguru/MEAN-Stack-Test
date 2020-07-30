const express = require("express");
const route = express();

// Setup middleware

// Setup routes
route.use("/user", require("./user"));

module.exports = route;
