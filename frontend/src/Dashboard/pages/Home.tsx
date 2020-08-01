import React from "react";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import TaskList from "../Task/components/TaskList";
import ProjectList from "../Project/components/ProjectList";
import Container from "@material-ui/core/Container";
import MainHeader from "../../shared/components/Navigation/MainHeader";

const Home = () => {
  return (
    <>
      <Container>
        <MainHeader title="ホーム" />
        <CheckAttendanceArea />
        <TaskList title="期限が近いタスク" iconType="alert" />
        <ProjectList />
      </Container>
    </>
  );
};

export default Home;
