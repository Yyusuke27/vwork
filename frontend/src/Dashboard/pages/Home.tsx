import React, { useEffect } from "react";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import TaskList from "../Task/components/TaskList";
import ProjectList from "../Project/components/ProjectList";
import Container from "@material-ui/core/Container";
import MainHeader from "../../shared/components/Navigation/MainHeader";
import { useDispatch } from "react-redux";
import { fetchAsyncAllMyProjects } from "../Project/projectSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncAllMyProjects());
  }, [dispatch]);
  return (
    <>
      <Container>
        <MainHeader title="ホーム" />
        <CheckAttendanceArea />
        {/* TODO: 最近追加したタスクとして3つタスクを表示 */}
        {/* TODO: 期限が近いタスクはなければ表示しない */}
        <TaskList title="期限が近いタスク" iconType="alert" />
        <ProjectList />
      </Container>
    </>
  );
};

export default Home;
