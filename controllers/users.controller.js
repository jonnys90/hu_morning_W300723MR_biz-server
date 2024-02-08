import {
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  patchIsBiz,
} from "../model/dbAdapter.js";
import handleError from "../utils/handleError.js";
import { generateHash, cmpHash } from "../utils/bcrypt.js";
import { generateToken } from "../token/jwt.js";

const registerController = async (req, res) => {
  /**
   * validation | mw, joi
   * get user from db
   * -check email
   * create hash
   * create user
   * response
   */
  try {
    let userFromDB = await getUserByEmail(req.body.email);
    // console.log(userFromDB);
    if (userFromDB) throw new Error("user already exists");
    let passwordHash = await generateHash(req.body.password);
    // console.log(req.body);
    req.body.password = passwordHash;
    // console.log(req.body);
    let newUser = await createUser(req.body);
    newUser.password = undefined;
    delete newUser.password; // not working, Sasha do not know why, ask gpt
    console.log(newUser);
    res.json(newUser);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const loginController = async (req, res) => {
  /**
   * validation | mw, joi
   * get user from db
   * if no found then error
   * compare password with hash from db
   * if not match then error
   * create token
   * response token
   */
  try {
    let userFromDB = await getUserByEmail(req.body.email);
    // console.log(userFromDB);
    if (!userFromDB) throw new Error("invalid email or password");
    let passwordMatch = await cmpHash(req.body.password, userFromDB.password);
    if (!passwordMatch) throw new Error("invalid email or password");
    let token = await generateToken({
      _id: userFromDB._id,
      isAdmin: userFromDB.isAdmin,
      isBusiness: userFromDB.isBusiness,
    });
    res.json(token);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const updateUserController = async (req, res) => {
  /**
   * validation | mw, joi
   * update user:
   * if(user is admin) then update user
   * if user is not admin then if user._id === payload(token)._id then update user
   * response user
   */
  try {
    // if (!req.userData.isAdmin && req.userData._id !== req.params.id)
    //   throw new Error("you not allowed to update");
    let userFromDB = await updateUser(req.params.id, req.body);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const patchIsBizController = async (req, res) => {
  try {
    let userFromDB = await patchIsBiz(req.params.id, req.body.isBusiness);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const deleteUserController = async (req, res) => {
  try {
    let userFromDB = await deleteUser(req.params.id);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

export {
  loginController,
  registerController,
  updateUserController,
  deleteUserController,
  patchIsBizController,
};
