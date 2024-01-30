import express from "express";
import usersRouter from "./api/users.router.js";
import cardsRouter from "./api/cards.router.js";
import handleError from "../utils/handleError.js";
const router = express.Router();

// http://localhost:3030/api/users
router.use("/users", usersRouter);

// http://localhost:3030/api/cards
router.use("/cards", cardsRouter);

// http://localhost:3030/api
router.get("/", (req, res) => {
  res.send("api sub route");
});

//404
router.use((req, res) => {
  handleError(res, 404, "not found");
});

// http://localhost:3030/api/users
// router.get("/users", (req, res) => {
//   res.send("users route");
// });

export default router;
