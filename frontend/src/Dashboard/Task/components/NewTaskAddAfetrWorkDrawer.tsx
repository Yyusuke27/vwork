import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TaskList from "./TaskList";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAddButtonAfterTask,
  toggleAddButtonAfterTask,
} from "../../../appSlice";

const NewTaskAddAfterWorkDrawer = () => {
  const dispatch = useDispatch();
  const addButtonAfterTask = useSelector(selectAddButtonAfterTask);
  return (
    <>
      <VwDrawer open={addButtonAfterTask}>
        <Container maxWidth="md">
          <Grid container direction="column">
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => dispatch(toggleAddButtonAfterTask(false))}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <TaskList title="タスク" />
            </Grid>
          </Grid>
        </Container>
      </VwDrawer>
    </>
  );
};

export default NewTaskAddAfterWorkDrawer;
