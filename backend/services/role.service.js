const User = require("../models/user.model");
const MAIN_ROLE = "Art Manager";
const allRoles = ["Artist", "Designer", "Art Manager"];

const getRoles = async (userId) => {
  try {
    let roles = [...allRoles];
    roles.splice(allRoles.indexOf(MAIN_ROLE), 1);

    let user = await User.findOne({ role: MAIN_ROLE });
    if (user == null) {
      roles = allRoles;
    } else {
      user = await User.findOne({ _id: userId });
      if (user != null && user.role === MAIN_ROLE) {
        roles = allRoles;
      }
    }
    return roles;
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = {
  getRoles,
};
