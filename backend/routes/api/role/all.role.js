const RoleService = require("../../../services/role.service");

module.exports = async (req, res, next) => {
  const roles = ["Artist", "Designer", "Art Manager"];
  res.status(200).json({ success: true, roles });
};
