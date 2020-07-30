const express = require("express");

const route = express();

route.get("/list", require("./list.role"));

module.exports = route;
