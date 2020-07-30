const RoleService = require("../../../services/role.service");

module.exports = async (req, res, next) => {
  const userId = req.query.user_id;
  try {
    const roles = await RoleService.getRoles(userId);
    res.status(200).json({ success: true, roles });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};
