import handleError from "../utils/handleError.js";

const adminOrOwn = (req, res, next) => {
  if (!req.userData) {
    //!these functions should be in deferent place
    throw new Error("you must be logged in");
  }
  if (req.userData.isAdmin || req.userData._id === req.params.id) {
    next();
  } else {
    handleError(res, 401, "you not allowed to do this action");
  }
};
export default adminOrOwn;
