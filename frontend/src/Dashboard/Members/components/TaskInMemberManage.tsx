import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TaskList from "../../Task/components/TaskList";
import { fetchAsyncMemberTasks, setTasks } from "../../Task/taskSlice";
import { selectTasks } from "../../Task/taskSlice";

const TaskInMemberManage = () => {
  interface ParamsType {
    memberId: string;
  }
  const memberId = useParams<ParamsType>().memberId;
  const dispatch = useDispatch();
  const taskData = useSelector(selectTasks);
  const getTasks = useCallback(
    async (userId) => {
      await dispatch(
        fetchAsyncMemberTasks(userId)
      );
    },
    [dispatch]
  );

  useEffect(() => {
    getTasks(memberId);
  }, [getTasks, memberId]);

  useEffect(() => {
    return function cleanup() {
      dispatch(
        setTasks({
          tasks: {
            id: "",
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
      <TaskList title="タスク一覧" taskData={taskData.tasks} />
    </>
  );
};

export default TaskInMemberManage;
