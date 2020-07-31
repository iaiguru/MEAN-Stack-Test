const UserService = require("../../../services/user.service");

module.exports = async (req, res, next) => {
  const { role, keyword } = req.body;
  try {
    const users = await UserService.search(role, keyword);
    res.status(200).json({ success: true, users });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error.");
  }
};
