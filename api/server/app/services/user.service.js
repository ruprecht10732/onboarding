const User = require("../models/user.model");

exports.getUser = async (query, page, limit) => {
  try {
    const users = await User.find(query);
    return users;
  } catch (error) {
    throw Error;
  }
};
