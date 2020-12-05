import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import { selectAddTaskButton, toggleAddTaskButton } from "../../../appSlice";
import { selectProject, selectProjects } from "../../Project/projectSlice";
import {
  fetchAsyncAddTask,
  fetchAsyncNearDeadlineTasks,
  fetchAsyncProjectTasks,
  fetchAsyncRecentTasks,
  fetchAsyncTasks,
} from "../taskSlice";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";

const NewTaskAddDrawer = () => {
  const dispatch = useDispatch();
  const taskAddButton = useSelector(selectAddTaskButton);

  const project = useSelector(selectProject);
  const projects = useSelector(selectProjects);
  const projectData = projects.map((data) => {
    return { id: data.id, name: data.name };
  });

  const taskData = {
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
  };

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
    await dispatch(fetchAsyncAddTask(value.task));
    if (pathName.includes("project")) {
      await dispatch(fetchAsyncProjectTasks(project.id));
    } else if (pathName.includes("my_task")) {
      await dispatch(fetchAsyncTasks());
    } else {
      await dispatch(fetchAsyncRecentTasks());
      await dispatch(fetchAsyncNearDeadlineTasks());
    }
    dispatch(toggleAddTaskButton(false));
  };
  return (
    <>
      {taskAddButton ? (
        <VwDrawer
          open={taskAddButton}
          click={() => dispatch(toggleAddTaskButton(false))}
        >
          <Container maxWidth="md">
            <Box mt={5}>
              <TaskForm
                projects={projectData}
                submitFunction={submitFunction}
                taskData={taskData}
              />
            </Box>
          </Container>
        </VwDrawer>
      ) : (
        ""
      )}
    </>
  );
};

export default NewTaskAddDrawer;
