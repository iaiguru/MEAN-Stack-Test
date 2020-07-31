const express = require("express");
const route = express();
const validateMiddleware = require("../../../middleware/validate");

route.post("/create", validateMiddleware, require("./create.user"));
route.get("/list", require("./list.user"));
route.delete("/delete/:id", require("./delete.user"));
route.put("/update/:id", validateMiddleware, require("./update.user"));
route.get("/:id", require("./info.user"));
route.post("/search", require("./search.user"));

module.exports = route;
