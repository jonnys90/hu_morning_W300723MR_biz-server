import connectToMongo from "./mongodb/dbConnect.js";
import connectToMySQL from "./mysql/dbConnect.js";
import {
  createUserMongo,
  getUserByEmailMongo,
} from "./mongodb/users/userService.js";
import {
  createCardMongo,
  getCardByBizNumberMongo,
  getAllCardsMongo,
} from "./mongodb/cards/cardService.js";
import normalizeUser from "./../normalize/user.normalize.js";
import normalizeCards from "../normalize/card.normalize.js";

const DB = "mongo";

const connectToDb = () => {
  if (DB === "mongo") {
    return connectToMongo();
  }
  if (DB === "mysql") {
    return connectToMySQL();
  }
};

const createUser = (user) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return createUserMongo(user);
  }
};

const getUserByEmail = (email) => {
  if (DB === "mongo") {
    return getUserByEmailMongo(email);
  }
};

const createCard = (card) => {
  //normalizeCard
  card = normalizeCards(card);
  if (DB === "mongo") {
    return createCardMongo(card);
  }
};

const getCardByBizNumber = (bizNumber) => {
  //normalizeCard
  if (DB === "mongo") {
    return getCardByBizNumberMongo(bizNumber);
  }
};

const getAllCards = () => {
  if (DB === "mongo") {
    return getAllCardsMongo();
  }
};

export default connectToDb;
export {
  createUser,
  createCard,
  getCardByBizNumber,
  getAllCards,
  getUserByEmail,
};
