const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
module.exports = mongoose.model("person", personSchema);
