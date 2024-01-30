const registerController = (req, res) => {
  res.send("register user");
};

const loginController = (req, res) => {
  res.send("login user");
};

export { loginController, registerController };
