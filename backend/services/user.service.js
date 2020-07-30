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

const getUser = async (id) => {
  try {
    const user = await User.findOne({ _id: id });
    return user;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (id) => {
  try {
    await User.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};

const updateUser = async (id, data) => {
  try {
    const user = await User.findByIdAndUpdate(id, { $set: data });
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
