const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Role = new Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  {
    collection: "roles",
  }
);

module.exports = mongoose.model("Role", Role);
