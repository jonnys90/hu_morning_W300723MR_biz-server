import debug from "debug";
const log = debug("app:authmw");
import { verifyToken } from "../token/jwt.js";
import handleError from "../utils/handleError.js";
const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers["x-auth-token"]) throw new Error("token not found");
    const payload = await verifyToken(req.headers["x-auth-token"]);
    req.userData = payload;
    log(payload);
    next();
  } catch (err) {
    log(err.message);
    handleError(res, 401, err.message);
  }
};

export default authMiddleware;
