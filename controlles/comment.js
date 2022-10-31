const comment = require("../models/comment");

exports.Addcomment = async (req, res) => {
  try {
    const com = new comment({ ...req.body, personID: req.params.id });
    await com.save();
    res.status(200).send({ msg: "comment added", com });
  } catch (error) {
    res.status(500).send("couldn't add comment");
  }
};
exports.Getcomment = async (req, res) => {
  try {
    const com = await comment.find().populate("personID");

    res.status(200).send({ msg: "comment list", com });
  } catch (error) {
    res.status(500).send("couldn't get comment");
  }
};
exports.Delcomment = async (req, res) => {
  try {
    await comment.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "comment deleted" });
  } catch (error) {
    res.status(500).send("couldn't delete comment");
  }
};
exports.Editcomment = async (req, res) => {
  try {
    const com = await comment.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );

    res.status(200).send({ msg: "comment updated", com });
  } catch (error) {
    res.status(500).send("couldn't update comment");
  }
};
