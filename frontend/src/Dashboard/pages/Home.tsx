import React from "react";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import ProjectList from "../Project/components/ProjectList";
import MainHeader from "../../shared/components/Navigation/MainHeader";
import { selectNearDeadlineTasks, selectRecentTasks } from "../Task/taskSlice";
import TaskList from "../Task/components/TaskList";

const Home = () => {
  const nearDeadlineTasks = useSelector(selectNearDeadlineTasks);
  const recentTasks = useSelector(selectRecentTasks);
  return (
    <>
      <Container>
        <MainHeader title="ホーム" />
        <CheckAttendanceArea />
        {nearDeadlineTasks ? (
          <TaskList
            title="期限が近いタスク"
            iconType="alert"
            taskData={nearDeadlineTasks}
          />
        ) : (
          ""
        )}
        {recentTasks ? (
          <TaskList title="アクティブなタスク" taskData={recentTasks} />
        ) : (
          ""
        )}

        <ProjectList />
      </Container>
    </>
  );
};

export default Home;
