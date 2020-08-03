const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

// データベース接続
connectDB();

// Routeファイル
const workspaces = require("./routes/workspaces");

const app = express();

// Body parser
app.use(express.json());

// 開発環境用のログ
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// route設定
app.use("/api/v1/workspaces", workspaces);

// TODO: errorハンドラーを追加する

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
