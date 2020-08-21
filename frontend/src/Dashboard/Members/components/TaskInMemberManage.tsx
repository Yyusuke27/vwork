import React, { useCallback, useEffect } from "react";
import TaskList from "../../Task/components/TaskList";
import { fetchAsyncMemberTasks } from "../../Task/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectWorkspace } from "../../../Auth/authSlice";

const TaskInMemberManage = () => {
  interface ParamsType {
    memberId: string;
  }
  const memberId = useParams<ParamsType>().memberId;
  const dispatch = useDispatch();
  const workspaceId = useSelector(selectWorkspace);
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
  return (
    <>
      <TaskList title="タスク一覧" />
    </>
  );
};

export default TaskInMemberManage;
