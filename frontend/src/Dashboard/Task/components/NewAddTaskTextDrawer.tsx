import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TaskList from "./TaskList";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import AppContext from "../../../AppContext";

const NewAddTaskTextDrawer = () => {
  const { addedTaskText, handleAddedTaskTextClose } = useContext(AppContext);
  return (
    <>
      <VwDrawer open={addedTaskText}>
        <Container maxWidth="md">
          <Grid container direction="column">
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleAddedTaskTextClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <TaskList title="今日行ったタスク" />
            </Grid>
          </Grid>
        </Container>
      </VwDrawer>
    </>
  );
};

export default NewAddTaskTextDrawer;
