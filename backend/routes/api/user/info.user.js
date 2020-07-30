const UserService = require("../../../services/user.service");

module.exports = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await UserService.getUser(id);
    res.status(200).json({ success: true, user });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error.");
  }
};
