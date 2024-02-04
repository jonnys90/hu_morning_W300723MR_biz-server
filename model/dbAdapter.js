import connectToMongo from "./mongodb/dbConnect.js";
import connectToMySQL from "./mysql/dbConnect.js";
import { createUser as createUserMongo } from "./mongodb/users/userService.js";
import { createCard as createCardMongo } from "./mongodb/cards/cardService.js";
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

const createCard = (card) => {
  //normalizeCard
  card = normalizeCards(card);
  if (DB === "mongo") {
    return createCardMongo(card);
  }
};

export default connectToDb;
export { createUser, createCard };
