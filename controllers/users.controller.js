import { getUserByEmail, createUser } from "../model/dbAdapter.js";
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

export { loginController, registerController };
