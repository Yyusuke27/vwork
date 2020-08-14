import React, { useEffect } from "react";
import TaskList from "../Task/components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import ProjectList from "../Project/components/ProjectList";
import MainHeader from "../../shared/components/Navigation/MainHeader";
import {
  selectNearDeadlineTasks,
  selectRecentTasks,
  selectTasks,
} from "../Task/taskSlice";
import { selectUser } from "../../Auth/authSlice";
import { setSelectedMembers } from "../dashboardSlice";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const tasks = useSelector(selectTasks);
  const nearDeadlineTasks = useSelector(selectNearDeadlineTasks);
  const recentTasks = useSelector(selectRecentTasks);

  useEffect(() => {
    dispatch(setSelectedMembers([user]));
  }, [dispatch, user, tasks]);
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
