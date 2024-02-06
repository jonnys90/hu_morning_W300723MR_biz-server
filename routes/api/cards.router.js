import express from "express";
import { getAllCardsController } from "../../controllers/cards.controller.js";
const router = express.Router();

//http://localhost:3030/api/cards
router.get("/", getAllCardsController);

export default router;
