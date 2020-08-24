import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import TaskAddButton from "../components/TaskAddButton";
import TaskList from "../components/TaskList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import { selectUser, selectWorkspace } from "../../../Auth/authSlice";
import {
  fetchAsyncTasks,
  selectTaskQuery,
  selectTasks,
  setQuery,
} from "../taskSlice";
import { setSelectedMembers } from "../../dashboardSlice";

const TASK_STATE = ["TODO", "進行中", "完了"];

const MyTask = () => {
  const dispatch = useDispatch();
  const workspace = useSelector(selectWorkspace);
  const tasksData = useSelector(selectTasks);
  const user = useSelector(selectUser);
  const tasks = useSelector(selectTasks);
  const taskQuery = useSelector(selectTaskQuery);

  const getTasks = useCallback(
    async (workspace) => {
      await dispatch(fetchAsyncTasks({ workspace }));
    },
    [dispatch]
  );

  const setTaskQuery = useCallback(() => {
    dispatch(setQuery(""));
  }, [dispatch]);

  useEffect(() => {
    if (workspace) {
      getTasks(workspace);
    }
    setTaskQuery();
  }, [getTasks, workspace, setTaskQuery]);

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
          <TaskList
            title={
              taskQuery
                ? `【${TASK_STATE[Number(taskQuery)]}】タスク一覧`
                : "一覧"
            }
            taskData={tasksData.data}
          />
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default MyTask;
