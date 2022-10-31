const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  body: String,
  personID: { type: mongoose.Schema.Types.ObjectId, ref: "person" },
});
module.exports = mongoose.model("comment", commentSchema);
