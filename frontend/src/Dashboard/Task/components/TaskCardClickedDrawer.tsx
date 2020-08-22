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
import { selectProject, selectProjects } from "../../Project/projectSlice";

import { Box, Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
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

  const projects = useSelector(selectProjects);
  const projectData = projects.map((data) => {
    return { id: data._id, name: data.name };
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // taskはreadonly propertyだから新しい変数に渡す
  const taskData = { ...task };

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
          <Box textAlign="right" mt={2}>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              aria-label="more"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  if (window.confirm("削除してもよろしいですか？")) {
                    console.log("削除した");
                  }
                }}
              >
                削除
              </MenuItem>
            </Menu>
          </Box>
          <TaskForm
            projects={projectData}
            submitFunction={submitFunction}
            taskData={taskData}
          />
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
