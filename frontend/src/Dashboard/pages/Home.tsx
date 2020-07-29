import React from "react";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import TaskList from "../Task/components/TaskList";
import ProjectList from "../Project/components/ProjectList";

const Home = () => {
  return (
    <>
      <CheckAttendanceArea />
      <TaskList title="期限が近いタスク" />
      <ProjectList />
    </>
  );
};

export default Home;
