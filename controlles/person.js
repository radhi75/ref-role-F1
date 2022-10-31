const person = require("../models/person");

exports.Addperson = async (req, res) => {
  try {
    const per = new person(req.body);
    await per.save();
    res.status(200).send({ msg: "user added", per });
  } catch (error) {
    res.status(500).send("couldn't add user");
  }
};
exports.Getpersons = async (req, res) => {
  try {
    const per = await person.find();

    res.status(200).send({ msg: "list of users", per });
  } catch (error) {
    res.status(500).send("couldn't get users");
  }
};
exports.Delperson = async (req, res) => {
  try {
    await person.findByIdAndDelete(req.params.id);

    res.status(200).send({ msg: "user deleted" });
  } catch (error) {
    res.status(500).send("couldn't delete user");
  }
};
exports.Editperson = async (req, res) => {
  try {
    const per = await person.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );

    res.status(200).send({ msg: "user updated", per });
  } catch (error) {
    res.status(500).send("couldn't update user");
  }
};
