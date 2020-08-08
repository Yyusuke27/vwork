const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

// Load models
const Workspace = require("./models/Workspace");
const Project = require("./models/Project");
const User = require("./models/User");
const Task = require("./models/Task");
const Attendance = require("./models/Attendance");

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
const projects = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/projects.json`, "utf-8")
);
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);
const tasks = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/tasks.json`, "utf-8")
);
const attendances = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/attendances.json`, "utf-8")
);

// DBにデータをインポート
const importData = async () => {
  try {
    await Workspace.create(workspaces);
    await Project.create(projects);
    await User.create(users);
    await Task.create(tasks);
    await Attendance.create(attendances);

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
    await Project.deleteMany();
    await User.deleteMany();
    await Task.deleteMany();
    await Attendance.deleteMany();

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
