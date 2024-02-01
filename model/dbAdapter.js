import connectToMongo from "./mongodb/dbConnect.js";
import connectToMySQL from "./mysql/dbConnect.js";

const DB = "mongo";

const connectToDb = () => {
  if (DB === "mongo") {
    return connectToMongo();
  }
  if (DB === "mysql") {
    return connectToMySQL();
  }
};

export default connectToDb;
