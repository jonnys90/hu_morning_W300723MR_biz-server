import express from "express";
import {
  deleteUserController,
  loginController,
  registerController,
  updateUserController,
  patchIsBizController,
} from "../../controllers/users.controller.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import {
  loginValidation,
  registerValidation,
  editUserValidation,
} from "../../validation/validationAdapter.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import adminOrOwn from "../../middlewares/adminOrOwn.mw.js";
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

router.put(
  "/:id",
  authMiddleware,
  adminOrOwn,
  bodyValidationMiddleware(editUserValidation),
  updateUserController
);

router.patch(
  "/:id",
  authMiddleware,
  adminOrOwn,
  //add patch validation
  patchIsBizController
);

router.delete("/:id", authMiddleware, adminOrOwn, deleteUserController);

export default router;
