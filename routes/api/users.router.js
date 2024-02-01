import express from "express";
import {
  loginController,
  registerController,
} from "../../controllers/users.controller.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import {
  loginValidation,
  registerValidation,
} from "../../validation/validationAdapter.js";
const router = express.Router();

// http://localhost:3030/api/users
router.get("/", (req, res) => {
  res.json("users sub route");
});

router.post(
  "/register",
  bodyValidationMiddleware(registerValidation),
  registerController
);

router.post(
  "/login",
  bodyValidationMiddleware(loginValidation),
  loginController
);

export default router;
