import React from "react";
import TaskAddButton from "../components/TaskAddButton";
import TaskList from "../components/TaskList";
import Container from "@material-ui/core/Container";
import MainHeader from "../../../shared/components/Navigation/MainHeader";

const MyTask = () => {
  return (
    <>
      <Container>
        <MainHeader title="マイタスク" />
        <TaskAddButton />

        <TaskList title="今日やる" />

        <TaskList title="一覧" />
      </Container>
    </>
  );
};

export default MyTask;
