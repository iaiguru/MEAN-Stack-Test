const express = require("express");

const route = express();

route.post("/create", require("./create.user"));
route.get("/list", require("./list.user"));
route.delete("/delete/:id", require("./delete.user"));

module.exports = route;
