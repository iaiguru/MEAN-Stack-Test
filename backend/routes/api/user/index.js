const express = require("express");

const route = express();

route.post("/create", require("./create.user"));
route.get("/list", require("./list.user"));
route.delete("/delete/:id", require("./delete.user"));
route.put("/update/:id", require("./update.user"));
route.get("/:id", require("./info.user"));
route.post("/search", require("./search.user"));

module.exports = route;
