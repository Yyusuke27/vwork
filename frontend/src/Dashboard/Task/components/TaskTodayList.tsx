import React from "react";
import TaskTodayItem from "./TaskTodayItem";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const taskdate = [{ title: "UI画面の実装" }];

const TaskTodayList = () => {
  return (
    <>
      <Container>
        <Box borderBottom={1} style={{ fontSize: 30, width: 500 }}>
          今日行ったタスク
        </Box>
        {taskdate.map((date, index) => {
          return <TaskTodayItem title={date.title} />;
        })}
      </Container>
    </>
  );
};

export default TaskTodayList;
