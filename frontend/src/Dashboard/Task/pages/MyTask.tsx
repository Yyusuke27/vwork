import React from "react";
import TaskAddButton from "../components/TaskAddButton";
import TaskList from "../components/TaskList";
import Container from "@material-ui/core/Container";

const MyTask = () => {
  return (
    <>
      <Container>
        <TaskAddButton />

        <TaskList title="今日やる" />

        <TaskList title="一覧" />
      </Container>
    </>
  );
};

export default MyTask;
