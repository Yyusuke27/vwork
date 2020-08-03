const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

// Load models
const Workspace = require("./models/Workspace");

// DBに接続
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// seedデータが入ったJSON fileの読み込み
const workspaces = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/workspaces.json`, "utf-8")
);

// DBにデータをインポート
const importData = async () => {
  try {
    await Workspace.create(workspaces);

    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DBのデータを削除
const deleteData = async () => {
  try {
    await Workspace.deleteMany();

    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
