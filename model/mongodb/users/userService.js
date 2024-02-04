import User from "./User.js";

const createUser = (userData) => {
  //save user in mongoose
  let user = new User(userData);
  return user.save();
};

export { createUser };
