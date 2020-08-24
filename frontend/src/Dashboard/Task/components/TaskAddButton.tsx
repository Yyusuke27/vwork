import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Color from "../../../shared/util/color";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { toggleAddTaskButton } from "../../../appSlice";
import { fetchAsyncTasks, selectTaskQuery, setQuery } from "../taskSlice";
import { selectWorkspace } from "../../../Auth/authSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: Color.VWORK_DARK_BLUE,
      width: 150,
      fontSize: 15,
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const TaskAddButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const workspace = useSelector(selectWorkspace);

  const getTasks = useCallback(
    async (workspace, query) => {
      await dispatch(fetchAsyncTasks({ workspace, query }));
    },
    [dispatch]
  );

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    dispatch(setQuery(event.target.value));
    getTasks(workspace, event.target.value);
  };

  const taskQuery = useSelector(selectTaskQuery);
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ paddingBottom: 0 }}
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
        <Grid item>
          <FormControl className={classes.margin}>
            <InputLabel id="task-state">絞り込み</InputLabel>
            <Select
              id="task-state"
              onChange={handleChange}
              style={{ width: 200 }}
              value={taskQuery}
            >
              <MenuItem value="">未選択</MenuItem>
              <MenuItem value="0">TODO</MenuItem>
              <MenuItem value="1">進行中</MenuItem>
              <MenuItem value="2">完了</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskAddButton;
