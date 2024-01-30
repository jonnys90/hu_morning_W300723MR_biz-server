import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("cards sub route");
});

export default router;
