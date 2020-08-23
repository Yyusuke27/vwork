const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");

// 開発環境用のログ
if (process.env.USE_MORGAN === "true") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

dotenv.config({ path: "./config/config.env" });

// データベース接続
connectDB();

// Routeファイル
const auth = require("./routes/auth");
const workspaces = require("./routes/workspaces");
const projects = require("./routes/projects");
const tasks = require("./routes/tasks");
const attendances = require("./routes/attendances");
const registration = require("./routes/registration");
const users = require("./routes/users");
const comments = require("./routes/comments");
const histories = require("./routes/histories");
const notifications = require("./routes/notifications");

const app = express();

// Setting CORS
if (process.env.USE_CORS === "true") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      optionsSuccessStatus: 200,
    })
  );
}

// Body parser
app.use(express.json());

// Sanitize data
app.use(mongoSanitize());

// Security Header設定
app.use(helmet());

// XSS対策
app.use(xss());

// レート制限
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// HPP対策
app.use(hpp());

// route設定
app.use("/api/v1/auth", auth);
app.use("/api/v1/workspaces", workspaces);
app.use("/api/v1/projects", projects);
app.use("/api/v1/tasks", tasks);
app.use("/api/v1/attendances", attendances);
app.use("/api/v1/registration", registration);
app.use("/api/v1/users", users);
app.use("/api/v1/comments", comments);
app.use("/api/v1/histories", histories);
app.use("/api/v1/notifications", notifications);

if (process.env.SHOW_BUILD_FRONTEND === "true") {
  app.use(express.static(path.join("public")));
  app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// ハンドルされなかったpromise rejectionsをハンドル
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
