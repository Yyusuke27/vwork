import React from "react";
import TaskAddButton from "../components/TaskAddButton";
import TaskList from "../components/TaskList";

const MyTask = () => {
  return (
    <>
      <TaskAddButton />

      <TaskList title="今日やる" />

      <TaskList title="一覧" />
    </>
  );
};

export default MyTask;
