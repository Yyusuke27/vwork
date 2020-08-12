import React from "react";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import TaskList from "../Task/components/TaskList";
import ProjectList from "../Project/components/ProjectList";
import Container from "@material-ui/core/Container";
import MainHeader from "../../shared/components/Navigation/MainHeader";
import { useSelector } from "react-redux";
import { selectNearDeadlineTasks, selectRecentTasks } from "../Task/taskSlice";

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
