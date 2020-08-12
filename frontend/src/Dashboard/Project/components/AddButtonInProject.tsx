import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import { toggleAddTaskButton } from "../../../appSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: Color.VWORK_DARK_BLUE,
      width: 150,
      fontSize: 15,
    },
  })
);

const AddButtonInProject = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={() => dispatch(toggleAddTaskButton(true))}
          >
            タスクを追加
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AddButtonInProject;
