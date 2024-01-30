import express from "express";
import {
  loginController,
  registerController,
} from "../../controllers/users.controller.js";
const router = express.Router();

// http://localhost:3030/api/users
router.get("/", (req, res) => {
  res.json("users sub route");
});

router.post("/register", registerController);

router.post("/login", loginController);

export default router;
