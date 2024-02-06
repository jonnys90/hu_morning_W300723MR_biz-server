import { getAllCards } from "../model/dbAdapter.js";

const getAllCardsController = async (req, res) => {
  try {
    let cards = await getAllCards();
    res.json(cards);
  } catch (err) {
    console.log(err);
  }
};

export { getAllCardsController };
