const express = require("express");

const route = express();

route.get("/list", require("./list.role"));
route.get("/all-list", require("./all.role"));
module.exports = route;
