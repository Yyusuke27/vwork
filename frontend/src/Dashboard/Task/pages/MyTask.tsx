import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TaskAddButton from "../components/TaskAddButton";
import TaskList from "../components/TaskList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import { selectUser, selectWorkspace } from "../../../Auth/authSlice";
import { fetchAsyncTasks, selectTasks } from "../taskSlice";

import Container from "@material-ui/core/Container";
import { setSelectedMembers } from "../../dashboardSlice";

const MyTask = () => {
  const dispatch = useDispatch();
  const workspace = useSelector(selectWorkspace);
  const tasksData = useSelector(selectTasks);
  const user = useSelector(selectUser);
  const tasks = useSelector(selectTasks);

  const getTasks = useCallback(
    async (workspace) => {
      await dispatch(fetchAsyncTasks(workspace));
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspace) {
      getTasks(workspace);
    }
  }, [getTasks, workspace]);

  useEffect(() => {
    dispatch(setSelectedMembers([user]));
  }, [dispatch, user, tasks]);

  return (
    <>
      <Container>
        <MainHeader title="マイタスク" />
        <TaskAddButton />
        {tasksData.todaysTasks && tasksData.todaysTasks.length > 0 ? (
          <TaskList title="今日やる" taskData={tasksData.todaysTasks} />
        ) : (
          ""
        )}
        {tasksData.count ? (
          <TaskList title="一覧" taskData={tasksData.data} />
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default MyTask;
