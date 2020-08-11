import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import { useSelector, useDispatch } from "react-redux";
import { selectAddedTaskText, toggleAddedTaskText } from "../../../appSlice";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 23,
    },
  })
);

const NewAddTaskTextDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addedTaskText = useSelector(selectAddedTaskText);
  return (
    <>
      <VwDrawer open={addedTaskText}>
        <Container maxWidth="md">
          <Grid container direction="column">
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => dispatch(toggleAddedTaskText(false))}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Box mt={5}>
              <Grid item style={{ width: "35%" }}>
                <Box borderBottom={1} className={classes.title}>
                  今日行ったタスク
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </VwDrawer>
    </>
  );
};

export default NewAddTaskTextDrawer;
