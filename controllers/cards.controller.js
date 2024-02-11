import {
  createCard,
  getAllCards,
  getAllMyCards,
  getCardById,
} from "../model/dbAdapter.js";
import handleError from "../utils/handleError.js";

const getAllCardsController = async (req, res) => {
  try {
    let cards = await getAllCards();
    res.json(cards);
  } catch (err) {
    console.log(err);
  }
};

const getCardByIdController = async (req, res) => {
  try {
    let card = await getCardById(req.params.id);
    res.json(card);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const getMyCardsController = async (req, res) => {
  const userId = req.userData._id;
  try {
    let myCards = await getAllMyCards(userId);
    return res.json(myCards);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const createCardController = async (req, res) => {
  /**
   * user logged
   * user logged in as biz
   * joi on body
   */
  try {
    const userId = req.userData._id;
    req.body.user_id = userId;
    let newCard = await createCard(req.body);
    return res.json(newCard);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

export {
  getAllCardsController,
  getCardByIdController,
  getMyCardsController,
  createCardController,
};
