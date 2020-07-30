import React from "react";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import TaskList from "../Task/components/TaskList";
import ProjectList from "../Project/components/ProjectList";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <>
      <Container>
        <CheckAttendanceArea />
        <TaskList title="期限が近いタスク" />
        <ProjectList />
      </Container>
    </>
  );
};

export default Home;