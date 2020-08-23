import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import {
  selectTaskCardClicked,
  toggleTaskCardClicked,
} from "../../../appSlice";
import {
  fetchAsyncNearDeadlineTasks,
  fetchAsyncProjectTasks,
  fetchAsyncRecentTasks,
  fetchAsyncTask,
  fetchAsyncTaskHistory,
  fetchAsyncTasks,
  fetchAsyncUpdateTask,
  selectSelectedTask,
  selectTask,
  selectTaskQuery,
  setTask,
} from "../taskSlice";
import TaskForm from "./TaskForm";
import {
  selectProject,
  selectProjects,
  setProject,
} from "../../Project/projectSlice";

import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TaskCommentForm from "./TaskCommentForm";
import TaskHistoryArea from "./TaskHistoryArea";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    historyArea: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "calc(100vh - 640px) !important",
      backgroundColor: "#F0F7F8",
    },
    historyOutputArea: {
      height: "calc(100% - 90px)",
      overflowY: "scroll",
      overflowX: "hidden",
    },
    commentArea: {
      position: "absolute",
      bottom: 0,
      width: "100%",
    },
  })
);

const TaskCardClickedDrawer = () => {
  const classes = useStyles();

  const project = useSelector(selectProject);

  const dispatch = useDispatch();
  const taskCardClicked = useSelector(selectTaskCardClicked);

  const taskQuery = useSelector(selectTaskQuery);

  const taskId = useSelector(selectSelectedTask);

  let task = useSelector(selectTask);

  const getTask = useCallback(
    async (taskId) => {
      await dispatch(fetchAsyncTask(taskId));
    },
    [dispatch]
  );

  useEffect(() => {
    getTask(taskId);
  }, [getTask, taskId]);

  useEffect(() => {
    return function cleanup() {
      dispatch(
        setProject({
          _id: "",
          name: "",
          color: 0,
          icon: 0,
          description: "",
          members: [],
          tasks: [],
        })
      );
    };
  }, [dispatch]);

  const projects = useSelector(selectProjects);
  const projectData = projects.map((data) => {
    return { id: data._id, name: data.name };
  });

  // taskはreadonly propertyだから新しい変数に渡す
  const taskData = { ...task };

  const update = taskData.project ? true : false;

  const pathName = window.location.pathname;

  const submitFunction = async (
    value: {
      task: {
        user: string;
        name: string;
        description: string;
        startDateAt: string;
        endDateAt: string;
        state: number;
        progress: number;
        priority: number;
        project: string | null;
        todaysTask: boolean;
      };
      log: {
        user?: string;
        name?: string;
        description?: string;
        startDateAt?: string;
        endDateAt?: string;
        state?: number;
        progress?: number;
        priority?: number;
        project?: string | null;
        todaysTask?: boolean;
      };
    },
    workspace: string
  ) => {
    await dispatch(
      fetchAsyncUpdateTask({ id: taskId, task: value.task, log: value.log })
    );
    if (pathName.includes("project")) {
      await dispatch(fetchAsyncProjectTasks(project._id));
    } else if (pathName.includes("mytask")) {
      await dispatch(fetchAsyncTasks({ workspace, query: taskQuery }));
    } else {
      await dispatch(fetchAsyncRecentTasks(workspace));
      await dispatch(fetchAsyncNearDeadlineTasks(workspace));
    }
    await dispatch(fetchAsyncTask(taskId));
    await dispatch(fetchAsyncTaskHistory(taskId));
  };

  return (
    <>
      <VwDrawer
        open={taskCardClicked}
        click={() => {
          dispatch(toggleTaskCardClicked(false));
          dispatch(
            setTask({
              user: "",
              name: "",
              description: "",
              startDateAt: "",
              endDateAt: "",
              state: 0,
              progress: 0,
              priority: 0,
              project: "",
              todaysTask: false,
            })
          );
        }}
      >
        <Container maxWidth="md">
          <Box mt={5}>
            <TaskForm
              projects={projectData}
              submitFunction={submitFunction}
              taskData={taskData}
              update={update}
              members={project.members}
            />
          </Box>
        </Container>
        <div className={classes.historyArea}>
          <div className={classes.historyOutputArea}>
            <TaskHistoryArea taskId={taskId} />
          </div>
          <div className={classes.commentArea}>
            <TaskCommentForm taskId={taskId} />
          </div>
        </div>
      </VwDrawer>
    </>
  );
};

export default TaskCardClickedDrawer;
