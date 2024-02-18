import handleError from "../utils/handleError.js";

//rawnak a
const isAdminMiddleware = async (req, res, next) => {
  if (!req.userData) {
    throw new Error("you must be logged in");
  }
  if (!req.userData.isAdmin) {
    return handleError(res, 401, "You are not an Admin");
  }
  next();
};
export default isAdminMiddleware;
