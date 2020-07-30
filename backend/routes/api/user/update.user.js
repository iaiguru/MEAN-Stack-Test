const UserService = require("../../../services/user.service");

module.exports = async (req, res, next) => {
  try {
    await UserService.updateUser(req.params.id, req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(422).send("User update failed");
  }
};
