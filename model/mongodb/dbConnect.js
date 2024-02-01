import mongoose from "mongoose";
import chalk from "chalk";

const connectToMongo = () => {
  mongoose
    .connect("mongodb://localhost:27017/bizdb")
    .then(() => {
      console.log(chalk.magentaBright.bold("Connected to MongoDB"));
    })
    .catch((err) => {
      console.log(chalk.redBright.bold("Error connecting to MongoDB: ", err));
      process.exit(1); //drop the server
    });
};

export default connectToMongo;
