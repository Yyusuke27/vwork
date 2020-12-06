import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import TaskList from "../Task/components/TaskList";
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
import { fetchAsyncTodaysAttendance } from "../Attendance/attendanceSlice";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const tasks = useSelector(selectTasks);
  const nearDeadlineTasks = useSelector(selectNearDeadlineTasks);
  const recentTasks = useSelector(selectRecentTasks);

  const getTodaysAttendance = useCallback(
    async () => {
      await dispatch(fetchAsyncTodaysAttendance());
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setSelectedMembers([user]));
  }, [dispatch, user, tasks]);

  useEffect(() => {
    getTodaysAttendance();
  }, [getTodaysAttendance]);

  return (
    <>
      <Container>
        <MainHeader title="ホーム" />
        <CheckAttendanceArea />
        {nearDeadlineTasks && nearDeadlineTasks.length > 0 ? (
          <TaskList
            title="期限が近いタスク"
            iconType="alert"
            taskData={nearDeadlineTasks}
          />
        ) : (
          ""
        )}
        {recentTasks && recentTasks.length > 0 ? (
          <TaskList title="アクティブなタスク" taskData={recentTasks} />
        ) : (
          ""
        )}

        <ProjectList title="参加しているプロジェクト" />
      </Container>
    </>
  );
};

export default Home;
