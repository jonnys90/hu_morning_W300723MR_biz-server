import handleError from "../utils/handleError.js";

const errorMiddleware = (err, req, res, next) => {
  //   console.log(Chalk.red(err.message));
  //   res.status(500).send(err.message);
  handleError(res, 500, err.message);
};

export default errorMiddleware;
