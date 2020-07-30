const User = require("../models/user.model");

const createUser = async ({ ...params }) => {
  const { firstName, lastName, email, role } = params;

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      role,
    });

    return user;
  } catch (err) {
    throw err;
  }
};

const getUsers = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (id) => {
  try {
    await User.findOneAndDelete(id);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createUser,
  getUsers,
  deleteUser,
};
