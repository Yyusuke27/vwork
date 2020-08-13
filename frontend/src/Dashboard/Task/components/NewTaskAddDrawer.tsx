import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import { useSelector, useDispatch } from "react-redux";
import { selectAddTaskButton, toggleAddTaskButton } from "../../../appSlice";
import { selectProjects } from "../../Project/projectSlice";
import TaskForm from "./TaskForm";
import { Container } from "@material-ui/core";
import { fetchAsyncAddTask, fetchAsyncTasks } from "../taskSlice";
import Box from "@material-ui/core/Box";

const NewTaskAddDrawer = () => {
  const dispatch = useDispatch();
  const taskAddButton = useSelector(selectAddTaskButton);

  const projects = useSelector(selectProjects);
  const projectData = projects.map((data) => {
    return { id: data._id, name: data.name };
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
    await dispatch(fetchAsyncAddTask({ task: value, workspace }));
    await dispatch(fetchAsyncTasks(workspace));
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
