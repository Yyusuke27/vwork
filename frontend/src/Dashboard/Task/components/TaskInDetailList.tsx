import React from "react";
import TaskInDetailItem from "./TaskInDetailItem";

const taskDate = [{ title: "UI画面の実装" }];

const TaskInDetailList = () => {
  return (
    <>
      {taskDate.map((date, index) => {
        return <TaskInDetailItem title={date.title} />;
      })}
    </>
  );
};

export default TaskInDetailList;
