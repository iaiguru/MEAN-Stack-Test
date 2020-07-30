const UserService = require("../../../services/user.service");

module.exports = async (req, res, next) => {
  try {
    await UserService.deleteUser(req.params.id);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(422).send("User delete failed");
  }
};
