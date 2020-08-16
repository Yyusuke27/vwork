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
  fetchAsyncTasks,
  fetchAsyncUpdateTask,
  selectSelectedTask,
  selectTask,
  setTask,
} from "../taskSlice";
import TaskForm from "./TaskForm";
import { selectProject, selectProjects } from "../../Project/projectSlice";

import { Box, Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const TaskCardClickedDrawer = () => {
  const project = useSelector(selectProject);

  const dispatch = useDispatch();
  const taskCardClicked = useSelector(selectTaskCardClicked);

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
    },
    workspace: string
  ) => {
    await dispatch(fetchAsyncUpdateTask({ id: taskId, task: value }));
    if (pathName.includes("project")) {
      await dispatch(fetchAsyncProjectTasks(project._id));
    } else if (pathName.includes("mytask")) {
      await dispatch(fetchAsyncTasks(workspace));
    } else {
      await dispatch(fetchAsyncRecentTasks(workspace));
      await dispatch(fetchAsyncNearDeadlineTasks(workspace));
    }
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
      </VwDrawer>
    </>
  );
};

export default TaskCardClickedDrawer;
