const express = require("express");

const route = express();

route.post("/create", require("./create.user"));

module.exports = route;
