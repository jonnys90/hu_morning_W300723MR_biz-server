import Chalk from "chalk";

const handleError = (res, status, message) => {
  console.log(Chalk.redBright(message));
  res.status(status).send(message);
};

export default handleError;
