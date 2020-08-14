import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Color from "../../../shared/util/color";
import { toggleAddTaskButton } from "../../../appSlice";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

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
  const [text, setText] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setText(event.target.value as string);
  };
  const dispatch = useDispatch();
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
            <NativeSelect
              value={text}
              onChange={handleChange}
              input={<BootstrapInput />}
              style={{ width: 200 }}
            >
              <option value={"未完了のタスク"}>未完了のタスク</option>
              <option value={"未完了のタスク"}>未完了のタスク</option>
              <option value={"未完了のタスク"}>未完了のタスク</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskAddButton;
