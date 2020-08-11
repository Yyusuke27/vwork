import React, { useContext } from "react";
import AppContext from "../../../AppContext";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TaskList from "./TaskList";

const NewTaskAddAfterWorkDrawer = () => {
  const { addButtonAfterTask, handleAddTaskButtonAfterWorkClose } = useContext(
    AppContext
  );
  return (
    <>
      <VwDrawer open={addButtonAfterTask}>
        <Container maxWidth="md">
          <Grid container direction="column">
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleAddTaskButtonAfterWorkClose}
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
