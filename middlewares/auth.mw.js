import { verifyToken } from "../token/jwt.js";
import handleError from "../utils/handleError.js";
const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers["x-auth-token"]) throw new Error("token not found");
    const payload = await verifyToken(req.headers["x-auth-token"]);
    req.userData = payload;
    next();
  } catch (err) {
    handleError(res, 401, err.message);
  }
};

export default authMiddleware;
