import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
import {
  selectProject,
  selectProjects,
  setProject,
} from "../../Project/projectSlice";
import TaskForm from "./TaskForm";
import TaskCommentForm from "./TaskCommentForm";
import TaskHistoryArea from "./TaskHistoryArea";
import { workspacePathId } from "../../../shared/util/workspacePathId"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    historyArea: {
      bottom: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#F0F7F8",
    },
    historyOutputArea: {
      height: "calc(100% - 90px)",
      overflowY: "scroll",
      overflowX: "hidden",
    },
    commentArea: {
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
      await dispatch(fetchAsyncTask({id: taskId, workspacePathId: workspacePathId}));
    },
    [dispatch]
  );

  const closeTaskCard = useCallback(
    () => {
      dispatch(toggleTaskCardClicked(false))
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
    },
    [dispatch]
  );

  const projects = useSelector(selectProjects);
  const projectData = projects.map((data) => {
    return { id: data.id, name: data.name };
  });

  // taskはreadonly propertyだから新しい変数に渡す
  const taskData = { ...task };

  const update = taskData.project ? true : false;

  const pathName = window.location.pathname;

  useEffect(() => {
    getTask(taskId);
  }, [getTask, taskId]);

  useEffect(() => {
    return function cleanup() {
      if (!pathName.includes("project")) {
        dispatch(
          setProject({
            id: "",
            name: "",
            color: 0,
            icon: 0,
            description: "",
            members: [],
            tasks: [],
          })
        );
      }

    };
  }, [dispatch, pathName]);

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
      await dispatch(fetchAsyncProjectTasks(project.id));
    } else if (pathName.includes("mytask")) {
      await dispatch(fetchAsyncTasks(taskQuery));
    } else {
      await dispatch(fetchAsyncRecentTasks());
      await dispatch(fetchAsyncNearDeadlineTasks());
    }
    await dispatch(fetchAsyncTask({id: taskId, workspacePathId: workspacePathId}));
    await dispatch(fetchAsyncTaskHistory(taskId));
  };

  return (
    <>
      <Dialog 
        open={taskCardClicked}
        onClose={closeTaskCard}
        keepMounted
        className="taskDialog">
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
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
          </Grid>
          <Grid item xs={false} sm={6} md={6} >
            <div className={classes.historyArea}>
              <div className={classes.historyOutputArea}>
                <TaskHistoryArea taskId={taskId} />
              </div>
              <div className={classes.commentArea}>
                <TaskCommentForm taskId={taskId} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default TaskCardClickedDrawer;
