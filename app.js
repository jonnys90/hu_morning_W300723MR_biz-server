import express from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
// import logger from "morgan";
import logger from "./loggers/loggerAdapter.js";
import * as url from "url";
import cors from "cors";
import errorMiddleware from "./middlewares/error.mw.js";
import apiRouter from "./routes/api.router.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let app = express();

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
  );
  next();
});
app.use(cors());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"],
    },
  })
);
app.use(compression());
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "build")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", apiRouter);
app.use(errorMiddleware);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

export default app;
