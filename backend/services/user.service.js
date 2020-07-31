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

const search = async (role, keyword) => {
  let hasQueryRole = false;
  let queryRole = [];
  let hasQueryKeyword = false;
  let queryKeyword = [];
  let query = {};

  try {
    if (role !== "All" && role !== "") {
      hasQueryRole = true;
      queryRole = { role: role };
    }

    if (keyword !== "") {
      hasQueryKeyword = true;
      queryKeyword = {
        $or: [
          { firstName: { $regex: `${keyword}`, $options: "" } },
          { lastName: { $regex: `${keyword}`, $options: "" } },
          { email: { $regex: `${keyword}`, $options: "" } },
        ],
      };
    }

    if (hasQueryKeyword && hasQueryRole) {
      query = { $and: [{ ...queryRole }, { ...queryKeyword }] };
    } else if (hasQueryRole) {
      query = queryRole;
    } else if (hasQueryKeyword) {
      query = queryKeyword;
    }

    const user = await User.find(query);
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
  search,
};
