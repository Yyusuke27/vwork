import React from "react";
import { useSelector, useDispatch } from "react-redux";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {
  selectAddButtonAfterTask,
  toggleAddButtonAfterTask,
} from "../../../appSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 23,
    },
  })
);

const NewTaskAddAfterWorkDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addButtonAfterTask = useSelector(selectAddButtonAfterTask);
  return (
    <>
      <VwDrawer
        open={addButtonAfterTask}
        click={() => dispatch(toggleAddButtonAfterTask(false))}
      >
        <Container maxWidth="md">
          <Grid container direction="column">
            <Box mt={5}>
              <Grid item style={{ width: "35%" }}>
                <Box borderBottom={1} className={classes.title}>
                  タスク
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </VwDrawer>
    </>
  );
};

export default NewTaskAddAfterWorkDrawer;
