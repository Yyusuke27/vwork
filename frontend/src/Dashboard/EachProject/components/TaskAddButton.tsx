import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Color from "../../../shared/util/color";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    button: {
      backgroundColor: Color.VWORK_DARK_BLUE,
      width: 150,
      fontSize: 15,
      marginTop: 35,
    },
  })
);

const TaskAddButton = () => {
  const classes = useStyles();

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
          >
            タスクを追加
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TaskAddButton;
