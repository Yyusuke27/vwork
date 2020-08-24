import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TaskList from "../../Task/components/TaskList";
import { fetchAsyncMemberTasks, setTasks } from "../../Task/taskSlice";
import { selectWorkspace } from "../../../Auth/authSlice";
import { selectTasks } from "../../Task/taskSlice";

const TaskInMemberManage = () => {
  interface ParamsType {
    memberId: string;
  }
  const memberId = useParams<ParamsType>().memberId;
  const dispatch = useDispatch();
  const workspaceId = useSelector(selectWorkspace);
  const taskData = useSelector(selectTasks);
  const getTasks = useCallback(
    async (workspace, userId) => {
      await dispatch(
        fetchAsyncMemberTasks({ workspace: workspace, userId: userId })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspaceId) {
      getTasks(workspaceId, memberId);
    }
  }, [getTasks, workspaceId, memberId]);

  useEffect(() => {
    return function cleanup() {
      dispatch(
        setTasks({
          tasks: {
            _id: "",
            count: 0,
            countTodaysTask: 0,
            data: [],
            todaysTasks: [],
          },
        })
      );
    };
  }, [dispatch]);

  return (
    <>
      <TaskList title="タスク一覧" taskData={taskData.data} />
    </>
  );
};

export default TaskInMemberManage;
