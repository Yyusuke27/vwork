import React from "react";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import TaskAlertArea from "../Task/components/TaskAlertArea";
import ProjectArea from "../Project/components/ProjectArea";

const Home = () => {
  return (
    <>
      <CheckAttendanceArea />
      <TaskAlertArea />
      <ProjectArea />
    </>
  );
};

export default Home;
