import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import { useSelector, useDispatch } from "react-redux";
import { selectAddTaskButton, toggleAddTaskButton } from "../../../appSlice";
import { selectUser } from "../../../Auth/authSlice";
import { selectProjects } from "../../Project/projectSlice";
import TaskForm from "./TaskForm";
import { Box, Container } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { fetchAsyncAddTask, fetchAsyncTasks } from "../taskSlice";

const NewTaskAddDrawer = () => {
  const dispatch = useDispatch();
  const taskAddButton = useSelector(selectAddTaskButton);
  const user = useSelector(selectUser);
  const userData = [{ name: user.name, id: user._id }];

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
              users={userData}
              projects={projectData}
              taskUser={user._id}
              submitFunction={submitFunction}
            />
          </Container>
        </VwDrawer>
      ) : (
        ""
      )}
    </>
  );
};

export default NewTaskAddDrawer;
