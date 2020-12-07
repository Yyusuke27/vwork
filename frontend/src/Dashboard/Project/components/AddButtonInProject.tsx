import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import { toggleAddTaskButton } from "../../../appSlice";
import { selectUser } from "../../../Auth/authSlice";
import { selectProject } from "../projectSlice";
import _ from "lodash";

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

  const project = useSelector(selectProject);
  const currentUser = useSelector(selectUser);

  // memberに自分のidが入っていなかったら表示しない
  const isProjectMember = _.some(project.members, ['id', currentUser.id])

  return (
    <>
    { isProjectMember ?
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
            data-testid="test"
          >
            タスクを追加
          </Button>
        </Grid>
      </Grid>
    : "" }
    </>
  );
};

export default AddButtonInProject;
