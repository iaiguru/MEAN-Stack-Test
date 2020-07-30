const UserService = require("../../../services/user.service");

module.exports = async (req, res, next) => {
  try {
    const users = await UserService.createUser(req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.status(422).send("Email duplicated");
    } else {
      res.status(422).send("User create failed");
    }
  }
};
