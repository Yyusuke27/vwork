import React from "react";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import TaskAlertArea from "../Task/components/TaskAlertArea";
import ProjectList from "../Project/components/ProjectList";

const Home = () => {
  return (
    <>
      <CheckAttendanceArea />
      <TaskAlertArea />
      <ProjectList />
    </>
  );
};

export default Home;
