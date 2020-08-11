import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAddButtonAfterTask,
  toggleAddButtonAfterTask,
} from "../../../appSlice";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

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
