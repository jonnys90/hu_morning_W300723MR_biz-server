import debug from "debug";
const log = debug("app:model:cardService");
import Card from "./Card.js";

//create
const createCardMongo = (cardData) => {
  log(cardData);
  let card = new Card(cardData);
  return card.save();
};

//read
const getAllCardsMongo = () => {
  return Card.find();
};
//read
const getCardByIdMongo = (id) => {
  return Card.findById(id);
};
const getCardByBizNumberMongo = (bizNumber) => {
  return Card.findOne({ bizNumber });
};
//ilan v
const getAllMyCardsMongo = (user_id) => {
  return Card.find({ user_id });
};
//update
const updateCardMongo = (id, cardData) => {
  return Card.findByIdAndUpdate(id, cardData, { new: true });
};
//delete
const deleteCardMongo = (id) => {
  return Card.findByIdAndDelete(id);
};
export {
  createCardMongo,
  getAllCardsMongo,
  getCardByIdMongo,
  getCardByBizNumberMongo,
  getAllMyCardsMongo,
  updateCardMongo,
  deleteCardMongo,
};
