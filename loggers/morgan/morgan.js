import morgan from "morgan";
import chalk from "chalk";

export default morgan(function (tokens, req, res) {
  const log = [
    tokens.date(req, res, "iso"),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens["response-time"](req, res),
    "ms",
    "-",
    tokens.res(req, res, "content-length"),
    "bytes",
  ].join(" ");
  if (tokens.status(req, res) > 399) return chalk.redBright(log);
  else return chalk.blueBright(log);
});
