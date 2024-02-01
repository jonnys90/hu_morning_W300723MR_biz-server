import handleError from "../utils/handleError.js";

const bodyValidationMiddleware = (validateSchema) => async (req, res, next) => {
  const body = req.body;
  try {
    await validateSchema(body);
    next();
  } catch (err) {
    handleError(res, 400, err.message);
  }
};
// const bodyValidationMiddleware = async (req, res, next) => {
//   const body = req.body;
//   try {
//     await registerValidation(body);
//     next();
//   } catch (err) {
//     handleError(res, 400, err.message);
//   }
// };

// const bodyValidationMiddlewareDynamic = (validateSchema) => {
//   const bodyValidationMiddleware = async (req, res, next) => {
//     const body = req.body;
//     try {
//       await validateSchema(body);
//       next();
//     } catch (err) {
//       handleError(res, 400, err.message);
//     }
//   };
//   return bodyValidationMiddleware;
// };

export default bodyValidationMiddleware;
